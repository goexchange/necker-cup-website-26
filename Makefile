.PHONY: help dev prod build-dev build-prod up-dev up-prod down logs clean

# Colors for output
BLUE=\033[0;34m
GREEN=\033[0;32m
YELLOW=\033[1;33m
NC=\033[0m # No Color

help: ## Show this help message
	@echo "$(BLUE)Necker Cup Docker Commands$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-20s$(NC) %s\n", $$1, $$2}'

dev: ## Start development server (alias for up-dev)
	@echo "$(YELLOW)Starting development server...$(NC)"
	@docker-compose up dev

prod: ## Start production server (alias for up-prod)
	@echo "$(YELLOW)Starting production server...$(NC)"
	@docker-compose --profile production up prod

build-dev: ## Build development image
	@echo "$(YELLOW)Building development image...$(NC)"
	@docker-compose build dev

build-prod: ## Build production image
	@echo "$(YELLOW)Building production image...$(NC)"
	@docker-compose build prod

up-dev: ## Start development container in background
	@echo "$(YELLOW)Starting development container...$(NC)"
	@docker-compose up -d dev
	@echo "$(GREEN)Development server running at http://localhost:5173$(NC)"

up-prod: ## Start production container in background
	@echo "$(YELLOW)Starting production container...$(NC)"
	@docker-compose --profile production up -d prod
	@echo "$(GREEN)Production server running at http://localhost:8080$(NC)"

down: ## Stop all containers
	@echo "$(YELLOW)Stopping all containers...$(NC)"
	@docker-compose down

logs: ## Show logs (use 'make logs service=dev' for specific service)
	@docker-compose logs -f $(service)

logs-dev: ## Show development logs
	@docker-compose logs -f dev

logs-prod: ## Show production logs
	@docker-compose logs -f prod

shell-dev: ## Open shell in development container
	@docker-compose exec dev sh

shell-prod: ## Open shell in production container
	@docker-compose exec prod sh

clean: ## Remove all containers, images, and volumes
	@echo "$(YELLOW)Cleaning up Docker resources...$(NC)"
	@docker-compose down -v
	@docker-compose rm -f
	@echo "$(GREEN)Cleanup complete$(NC)"

rebuild-dev: ## Rebuild and restart development container
	@echo "$(YELLOW)Rebuilding development container...$(NC)"
	@docker-compose build --no-cache dev
	@docker-compose up -d dev
	@echo "$(GREEN)Development server rebuilt and running$(NC)"

rebuild-prod: ## Rebuild and restart production container
	@echo "$(YELLOW)Rebuilding production container...$(NC)"
	@docker-compose build --no-cache prod
	@docker-compose --profile production up -d prod
	@echo "$(GREEN)Production server rebuilt and running$(NC)"

status: ## Show status of all containers
	@docker-compose ps
