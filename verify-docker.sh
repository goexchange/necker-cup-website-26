#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   🐳 Necker Cup Website - Docker Setup Verification   ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check Docker
echo -e "${YELLOW}Checking Docker installation...${NC}"
if command -v docker &> /dev/null; then
    DOCKER_VERSION=$(docker --version)
    echo -e "${GREEN}✓${NC} Docker found: ${DOCKER_VERSION}"
else
    echo -e "${RED}✗${NC} Docker not found. Please install Docker Desktop."
    exit 1
fi

# Check Docker Compose
echo -e "${YELLOW}Checking Docker Compose...${NC}"
if command -v docker-compose &> /dev/null; then
    COMPOSE_VERSION=$(docker-compose --version)
    echo -e "${GREEN}✓${NC} Docker Compose found: ${COMPOSE_VERSION}"
else
    echo -e "${RED}✗${NC} Docker Compose not found."
    exit 1
fi

# Check if Docker daemon is running
echo -e "${YELLOW}Checking Docker daemon...${NC}"
if docker info &> /dev/null; then
    echo -e "${GREEN}✓${NC} Docker daemon is running"
else
    echo -e "${RED}✗${NC} Docker daemon is not running. Please start Docker Desktop."
    exit 1
fi

# Check for Dockerfile
echo -e "${YELLOW}Checking Docker files...${NC}"
if [ -f "Dockerfile" ]; then
    echo -e "${GREEN}✓${NC} Dockerfile found"
else
    echo -e "${RED}✗${NC} Dockerfile not found"
    exit 1
fi

if [ -f "docker-compose.yml" ]; then
    echo -e "${GREEN}✓${NC} docker-compose.yml found"
else
    echo -e "${RED}✗${NC} docker-compose.yml not found"
    exit 1
fi

if [ -f "nginx.conf" ]; then
    echo -e "${GREEN}✓${NC} nginx.conf found"
else
    echo -e "${RED}✗${NC} nginx.conf not found"
    exit 1
fi

# Check ports
echo -e "${YELLOW}Checking port availability...${NC}"
if lsof -i :5173 &> /dev/null; then
    echo -e "${YELLOW}⚠${NC}  Port 5173 is in use (development server may conflict)"
else
    echo -e "${GREEN}✓${NC} Port 5173 is available"
fi

if lsof -i :8080 &> /dev/null; then
    echo -e "${YELLOW}⚠${NC}  Port 8080 is in use (production server may conflict)"
else
    echo -e "${GREEN}✓${NC} Port 8080 is available"
fi

# List existing images
echo ""
echo -e "${YELLOW}Checking for existing Docker images...${NC}"
if docker images | grep -q "necker-cup"; then
    echo -e "${GREEN}✓${NC} Found existing images:"
    docker images | grep "necker-cup" | awk '{print "  - " $1 ":" $2 " (" $7 " " $8 " ago)"}'
else
    echo -e "${YELLOW}⚠${NC}  No images built yet (this is normal for first-time setup)"
fi

# List running containers
echo ""
echo -e "${YELLOW}Checking for running containers...${NC}"
if docker ps | grep -q "necker-cup"; then
    echo -e "${GREEN}✓${NC} Found running containers:"
    docker ps | grep "necker-cup" | awk '{print "  - " $NF " (port " $6 ")"}'
else
    echo -e "${BLUE}ℹ${NC}  No containers running"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   ✅ Docker setup verification complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo -e "  1. Start development server: ${GREEN}make dev${NC}"
echo -e "  2. Start production server:  ${GREEN}make prod${NC}"
echo -e "  3. View all commands:        ${GREEN}make help${NC}"
echo ""
echo -e "${BLUE}Documentation:${NC}"
echo -e "  • Quick Start: DOCKER-QUICKSTART.md"
echo -e "  • Full Guide:  README-DOCKER.md"
echo -e "  • Summary:     DOCKER-SETUP-COMPLETE.md"
echo ""
