kubectl delete -f backstage-service.yaml
kubectl delete -f backstage.yaml
kubectl delete -f postgres.yaml
kubectl delete -f postgres-storage.yaml
kubectl delete -f backstage-secrets.yaml
kubectl delete -f postgres-secrets.yaml
kubectl delete -f namespace.yaml
