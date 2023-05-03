# AWS AppRunner showcase
This sample application is dedicated to showcase how to easily run containerized application using AWS native managed services

## Prerequisites
1. Have `Docker` installed into your environment
2. Have `AWS CLI` installed into your environment

## Creating an AppRunner Service using AWS CLI
1. Create an ECR Repository 
-  `aws ecr create-repository --repository-name quotes-of-cloudvisor --region eu-central-1`
2. Log into the Registry
- `aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin <account-number>.dkr.ecr.eu-central-1.amazonaws.com` 
3. Build the image (you will see the Dockerfile attached)
- `docker build -t <account-number>.dkr.ecr.eu-central-1.amazonaws.com/quotes-of-cloudvisor:1 .`
4. Push the image to the ECR Repository
-  `docker push <account-number>.dkr.ecr.eu-central-1.amazonaws.com/quotes-of-cloudvisor:1`
5. Creating the required roles
- `aws iam create-role --role-name AppRunnerECRAccessRole0 --assume-role-policy-document file://./aws-resources/assume-role-policy.json`
6. Attach the ECR Managed Policy to AppRunnerPolicy
-  `aws iam attach-role-policy --role-name AppRunnerECRAccessRole0 --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess`
7. Create the AppRunner Service
    1. Open the `aws-resources/source-configuration` file and change the account number!!!
    2. `aws apprunner create-service --serivce-name quotes-of-cloudvisor --source-configuration file://./aws-resources/source-configuration.json`

8. In the response you got back the service URL something like: `smthsdf.eu-central-1.awsapprunner.com`, visit and check if the service is working!