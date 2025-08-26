# Script para fazer push do projeto Patagonia Premium para GitHub
# Execução: .\push-to-github.ps1

Write-Host "🚀 Iniciando push para GitHub..." -ForegroundColor Green

# Criar .gitignore
$gitignoreContent = @"
# Dependências
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json
yarn.lock
pnpm-lock.yaml

# Builds e outputs
.next/
out/
dist/
build/
.cache/

# Ambiente
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor/IDE
.vscode/
.idea/
*.swp
*.swo

# Sistema
.DS_Store
Thumbs.db
"@

$gitignoreContent | Out-File -FilePath ".gitignore" -Encoding UTF8
Write-Host "✅ .gitignore criado" -ForegroundColor Yellow

# Verificar se Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Yellow
} catch {
    Write-Host "❌ Git não está instalado ou não está no PATH" -ForegroundColor Red
    exit 1
}

# Inicializar repositório
if (!(Test-Path ".git")) {
    git init
    Write-Host "✅ Repositório Git inicializado" -ForegroundColor Yellow
} else {
    Write-Host "✅ Repositório Git já existe" -ForegroundColor Yellow
}

# Configurar branch principal
git branch -M main
Write-Host "✅ Branch main configurada" -ForegroundColor Yellow

# Remover origin existente (se houver) e adicionar novo
git remote remove origin 2>$null
git remote add origin https://github.com/alexnf82/patagonia-premium.git
Write-Host "✅ Origin configurado" -ForegroundColor Yellow

# Verificar arquivos
$files = Get-ChildItem -File | Measure-Object
Write-Host "📁 Arquivos encontrados: $($files.Count)" -ForegroundColor Cyan

# Adicionar arquivos
git add .
Write-Host "✅ Arquivos adicionados ao stage" -ForegroundColor Yellow

# Verificar status
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Arquivos para commit:" -ForegroundColor Cyan
    Write-Host $status -ForegroundColor Gray
} else {
    Write-Host "ℹ️ Nenhuma alteração para commit" -ForegroundColor Blue
}

# Fazer commit
$commitMessage = @"
feat: Patagonia Premium - Site completo com menu minimalista

- Site HTML estático com paleta de cores da marca
- Configuração Next.js/React/Tailwind CSS
- Menu minimalista flutuante com ícones Lucide
- Design elegante para público alto padrão
- PWA otimizado para SEO
- UX simplificado e responsivo
"@

git commit -m $commitMessage
Write-Host "✅ Commit realizado" -ForegroundColor Yellow

# Push para GitHub
Write-Host "🔄 Fazendo push para GitHub..." -ForegroundColor Cyan
try {
    git push -u origin main
    Write-Host "🎉 Push realizado com sucesso!" -ForegroundColor Green
    Write-Host "🌐 Repositório: https://github.com/alexnf82/patagonia-premium" -ForegroundColor Blue
} catch {
    Write-Host "❌ Erro no push. Possíveis causas:" -ForegroundColor Red
    Write-Host "   • Credenciais do GitHub não configuradas" -ForegroundColor Yellow
    Write-Host "   • 2FA ativo (use Personal Access Token)" -ForegroundColor Yellow
    Write-Host "   • Sem permissão no repositório" -ForegroundColor Yellow
    
    Write-Host "🔧 Configure as credenciais:" -ForegroundColor Cyan
    Write-Host "   git config --global user.name 'alexnf82'" -ForegroundColor Gray
    Write-Host "   git config --global user.email 'seu-email@exemplo.com'" -ForegroundColor Gray
}

Write-Host "✨ Script finalizado!" -ForegroundColor Green
