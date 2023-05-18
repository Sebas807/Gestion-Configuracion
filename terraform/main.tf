terraform {
    required_providers {
        aws = {
            source  = "hashicorp/aws"
        }
    }
}


provider "aws" {
    region  = "us-east-1"
}


resource "aws_instance" "app_server" {
    ami           = "ami-0889a44b331db0194"
    instance_type = "t2.micro"
    security_groups = [aws_security_group.allow_ssh.name]
    key_name = "smunoz368"

    # https://github.com/hashicorp/terraform-provider-aws/issues/23315
    user_data_replace_on_change = true

    user_data = <<-EOF
        #!/bin/bash
        set -ex
        sudo yum update -y
        sudo yum install docker -y
        sudo service docker start
        sudo usermod -a -G docker ec2-user
        sudo docker pull sebas807/gestion_configuracion:opc
        sudo docker run -d -p 3000:3000 sebas807/gestion_configuracion:opc
    EOF


    tags = {
    Name = "smunoz368"
    }
}

resource "aws_security_group" "allow_ssh" {
    name        = "allow-smunoz368"
    description = "Allow inbound traffic"


    ingress {
    description      = "SSH from VPC"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
    }


    ingress {
    description      = "HTTP from VPC"
    from_port        = 3000
    to_port          = 3000
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
    }


    egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
    }


    tags = {
    Name = "allow_smunoz368"
    }
}
