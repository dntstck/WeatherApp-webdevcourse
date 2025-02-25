# Deploying WeatherApp

 To deploy this app, first we need docker and the localstack image
 we can pull it with this command:

``` docker pull localstack/localstack ```

then, run it

``` docker run -p 4566:4566 -p 4571:4571 localstack/localstack ```

now we create a "Bucket", using the name my-bucket

``` aws --endpoint-url=http://localhost:4566 s3 mb s3://my-bucket --profile localstack```

then we navigate to our directory and build the app (assuming you have preconfigured AWS CLI)

``` cd WeatherApp && npm run build ```

then copy the dist dir to your bucket

``` aws --endpoint-url=http://localhost:4566 s3 cp --recursive dist/ s3://my-bucket/ --profile localstack```

finally, the weather app should be viewable at ```http://localhost:4566 ```

```https://github.com/dntstck/WeatherApp-webdevcourse```
