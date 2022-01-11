set -a
[ -f .env ] && . .env
set +a

kubectl apply -f namespace.yaml
kubectl apply -f postgres-secrets.yaml
kubectl apply -f backstage-secrets.yaml
kubectl apply -f postgres-storage.yaml
kubectl apply -f postgres.yaml
kubectl apply -f backstage.yaml
kubectl apply -f backstage-service.yaml

kubectl get pods --namespace=backstage
