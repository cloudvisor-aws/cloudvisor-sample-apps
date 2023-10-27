## Tips and Trics
### SAM Deploy Guide
```sh
sam deploy --stack-name <stack-name> \
--template-file cloudfront.yaml \
--capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM CAPABILITY_IAM \
--region us-east-1 \
--s3-bucket <s3 bucket where the template will be uploaded> \
--parameter-overrides R53HostedZoneDomainName=<hosted zone domain name> R53HostedZoneId=<hosted zone id> ACMWildCardDomainName=<wild cird domain for ACM certificate> MultiTenantDomainAliases=<domain names> \
--debug \
--profile <aws profile if needed>
```

### SAM Deploy Example
```sh
sam deploy --stack-name multitenantapp \
--template-file cloudfront.yaml \
--capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_NAMED_IAM CAPABILITY_IAM \
--region us-east-1 \
--s3-bucket cloudvisor-stacks-bucket-us-east-1 \
--parameter-overrides R53HostedZoneDomainName=example.com R53HostedZoneId=Z038114731YPHB75QF8WZ ACMWildCardDomainName=*.example.com MultiTenantDomainAliases=blue.example.com,red.example.com \
--debug \
--profile cloudvisor
```