# Vue Testing Suite

Vue Testing Suite enables a user to create an AWS Lambda function with Vue testing abilities. 

***

## AWS Lambda Function
**AWS Lambda Function Configuration details -** 

| -                 | Value                       |
| ------------------|:---------------------------:|
| **Function name** | vueTestingSuite             |
| **Runtime**       | Node.js 10.x                |
| **Execution role**| lambda_basic_execution role |
| **Memory (MB)**   | 1024 MB                     |
| **Timeout**       | 40 sec                      |
| **Trigger**       | API Gateway                 |

*** 

## Deployment
This repository supports auto-deployment of the lambda function on every push to this project using GitHub Actions.
### Steps to deploy -
1. Clone the repository
   ```shell
   git clone https://github.com/Aishwarya26l/vueTestingSuite
   ```
