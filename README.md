# Multi-stage pipeline for static web site using Storage Accounts

This project is intended to demonstrate how to create a multi-stage pipeline for a static web site using Azure DevOps and Azure Storage Accounts, including the power to define variables values for each stage/environment.

[![Build Status](https://dev.azure.com/contoso-hq/Static%20Web%20Site/_apis/build/status%2FStatic%20Web%20Site?branchName=main)](https://dev.azure.com/contoso-hq/Static%20Web%20Site/_build/latest?definitionId=15&branchName=main)

## Set up

Create three variables groups in Azure DevOps Pipelines Library:

- `staticwebsite-dev`
- `staticwebsite-hml`
- `staticwebsite-prd`

Each group should have the following variables:

- `resourcegroup` = resource group where the storage account is located
- `storageaaccount` = storage account name for the respective environment


## Demo the scenario

1.  Create a yaml based build pipeline using the file .azure/azure-pipelines.yml.

2. Run the pipeline in Azure DevOps.

3. Once the pipeline is completed, the static web site will be available in the respective storage account. To access the web site, get the URL in the storage account: Settings > Endpoints > Static website.

4. Notice in the website home page that the following values are fullfilled by the pipeline using the variables groups as the source value:

    - `Environment`
    - `Storage Account`: storage account name

## Expand the scenario

1. Add a new variable in the .env file, for instance:
    
    `REACT_APP_API_URL=#{apiurl}#`

2. Open file src/App.js and add the following code to display the API URL in the line 24:

    ```
    <br />API URL: {process.env.REACT_APP_API_URL}</p>
    ```

3. Go to each variable group in the Azure DevOps Pipelines Library and add the new  variable `apiurl` with the respective value for each environment as follows:

    - `apiurl` = `https://api-dev.contoso.com`
    - `apiurl` = `https://api-hml.contoso.com`
    - `apiurl` =  `https://api-prd.contoso.com`

8. Run the pipeline in Azure DevOps.

9. Confirm that each home page will show the respective API URL.

10. Notice that if you give your dev the privilege to manage their app variable group, the variables management will be in developer hands end-to-end.