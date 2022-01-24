
```shell
./apply.sh

# https://backstage.io/docs/deployment/k8s
sudo kubectl port-forward --namespace=backstage svc/backstage 80:80

curl localhost

./delete.sh
```

```shell
minikube addons enable ingress
```