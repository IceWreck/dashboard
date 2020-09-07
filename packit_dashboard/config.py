from os import getenv

deployment = getenv("DEPLOYMENT", "stg")

# API_URL = f"https://{deployment}.packit.dev/api"
API_URL = f"https://packit.abifog.com:8443/api"
