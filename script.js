const questions = [
    {
        question: "Qual é o principal benefício da computação em nuvem em termos de despesas de capital (CapEx)?",
        options: [
            "A) Aumenta significativamente os custos iniciais de infraestrutura",
            "B) Converte despesas de capital em despesas operacionais",
            "C) Requer investimento antecipado em hardware físico",
            "D) Elimina completamente todos os custos operacionais"
        ],
        correct: 1,
        explanation: "A computação em nuvem permite converter CapEx (despesas de capital) em OpEx (despesas operacionais), eliminando a necessidade de grandes investimentos iniciais em infraestrutura."
    },
    {
        question: "Qual serviço AWS é usado para armazenamento de objetos?",
        options: [
            "A) Amazon EBS",
            "B) Amazon S3",
            "C) Amazon RDS",
            "D) Amazon DynamoDB"
        ],
        correct: 1,
        explanation: "Amazon S3 (Simple Storage Service) é o serviço de armazenamento de objetos da AWS, oferecendo durabilidade, disponibilidade e escalabilidade."
    },
    {
        question: "Qual é o modelo de responsabilidade compartilhada na AWS?",
        options: [
            "A) AWS é responsável por tudo, incluindo os dados do cliente",
            "B) O cliente é responsável por toda a infraestrutura física",
            "C) AWS cuida da segurança 'da' nuvem, cliente cuida da segurança 'na' nuvem",
            "D) Apenas o cliente é responsável pela segurança"
        ],
        correct: 2,
        explanation: "No modelo de responsabilidade compartilhada, a AWS é responsável pela segurança DA nuvem (infraestrutura), enquanto o cliente é responsável pela segurança NA nuvem (dados, aplicações, configurações)."
    },
    {
        question: "Qual serviço AWS fornece computação serverless?",
        options: [
            "A) Amazon EC2",
            "B) Amazon Lambda",
            "C) Amazon ECS",
            "D) Amazon EKS"
        ],
        correct: 1,
        explanation: "Amazon Lambda é o serviço de computação serverless da AWS que executa código sem a necessidade de provisionar ou gerenciar servidores."
    },
    {
        question: "O que significa RPO (Recovery Point Objective)?",
        options: [
            "A) Tempo máximo aceitável para restaurar um sistema",
            "B) Quantidade máxima de dados que pode ser perdida",
            "C) Número de backups necessários",
            "D) Frequência de teste de recuperação"
        ],
        correct: 1,
        explanation: "RPO (Recovery Point Objective) define a quantidade máxima de dados que uma organização pode perder durante um incidente, medida em tempo."
    },
    {
        question: "Qual serviço AWS é usado para criar redes privadas virtuais?",
        options: [
            "A) Amazon Route 53",
            "B) Amazon VPC",
            "C) Amazon CloudFront",
            "D) AWS Direct Connect"
        ],
        correct: 1,
        explanation: "Amazon VPC (Virtual Private Cloud) permite criar redes privadas virtuais na AWS com controle total sobre o ambiente de rede."
    },
    {
        question: "Qual é o benefício principal do Amazon CloudFront?",
        options: [
            "A) Armazenamento de banco de dados",
            "B) Computação de alto desempenho",
            "C) Distribuição de conteúdo com baixa latência",
            "D) Monitoramento de recursos"
        ],
        correct: 2,
        explanation: "Amazon CloudFront é um CDN (Content Delivery Network) que distribui conteúdo globalmente com baixa latência e alta velocidade de transferência."
    },
    {
        question: "Qual ferramenta AWS ajuda a estimar custos antes da implementação?",
        options: [
            "A) AWS Cost Explorer",
            "B) AWS Pricing Calculator",
            "C) AWS Budgets",
            "D) AWS Billing Dashboard"
        ],
        correct: 1,
        explanation: "AWS Pricing Calculator permite estimar custos de serviços AWS antes da implementação, ajudando no planejamento orçamentário."
    },
    {
        question: "Qual serviço AWS é recomendado para aplicações que requerem consistência eventual?",
        options: [
            "A) Amazon RDS",
            "B) Amazon DynamoDB",
            "C) Amazon Aurora",
            "D) Amazon Redshift"
        ],
        correct: 1,
        explanation: "Amazon DynamoDB é um banco NoSQL que oferece consistência eventual por padrão, sendo ideal para aplicações que podem tolerar esse modelo."
    },
    {
        question: "O que é AWS Organizations?",
        options: [
            "A) Serviço de monitoramento",
            "B) Ferramenta de gerenciamento centralizado de múltiplas contas AWS",
            "C) Serviço de backup",
            "D) Plataforma de desenvolvimento"
        ],
        correct: 1,
        explanation: "AWS Organizations permite gerenciar centralmente múltiplas contas AWS, aplicar políticas e consolidar faturamento."
    },
    {
        question: "Qual princípio do Well-Architected Framework foca na proteção de dados e sistemas?",
        options: [
            "A) Excelência Operacional",
            "B) Segurança",
            "C) Confiabilidade",
            "D) Otimização de Custos"
        ],
        correct: 1,
        explanation: "O pilar Segurança do AWS Well-Architected Framework foca na proteção de dados, sistemas e ativos através de práticas de segurança."
    },
    {
        question: "Qual serviço AWS fornece monitoramento e observabilidade?",
        options: [
            "A) Amazon Inspector",
            "B) Amazon CloudWatch",
            "C) AWS Config",
            "D) AWS GuardDuty"
        ],
        correct: 1,
        explanation: "Amazon CloudWatch é o serviço principal de monitoramento e observabilidade da AWS, coletando métricas, logs e eventos."
    },
    {
        question: "O que é Multi-AZ deployment no Amazon RDS?",
        options: [
            "A) Distribuição de dados em múltiplas regiões",
            "B) Backup automático em várias zonas",
            "C) Replicação síncrona para alta disponibilidade",
            "D) Balanceamento de carga entre zonas"
        ],
        correct: 2,
        explanation: "Multi-AZ deployment no RDS fornece alta disponibilidade através de replicação síncrona de dados entre zonas de disponibilidade."
    },
    {
        question: "Qual serviço AWS é usado para gerenciamento de identidades e acessos?",
        options: [
            "A) Amazon Cognito",
            "B) AWS IAM",
            "C) AWS Directory Service",
            "D) AWS Single Sign-On"
        ],
        correct: 1,
        explanation: "AWS IAM (Identity and Access Management) é o serviço principal para gerenciar identidades, usuários, grupos e permissões na AWS."
    },
    {
        question: "Qual é a principal vantagem da Auto Scaling?",
        options: [
            "A) Redução de custos fixos",
            "B) Ajuste automático de recursos baseado na demanda",
            "C) Melhoria na segurança",
            "D) Simplificação da arquitetura"
        ],
        correct: 1,
        explanation: "Auto Scaling ajusta automaticamente a capacidade de recursos baseado na demanda, garantindo performance otimizada e controle de custos."
    },
    {
        question: "Qual serviço AWS é usado para análise de big data em tempo real?",
        options: [
            "A) Amazon Redshift",
            "B) Amazon Kinesis",
            "C) Amazon EMR",
            "D) Amazon Athena"
        ],
        correct: 1,
        explanation: "Amazon Kinesis permite coletar, processar e analisar dados em streaming em tempo real para big data analytics."
    },
    {
        question: "O que é Amazon EBS?",
        options: [
            "A) Serviço de email",
            "B) Armazenamento em bloco para EC2",
            "C) Banco de dados NoSQL",
            "D) Serviço de CDN"
        ],
        correct: 1,
        explanation: "Amazon EBS (Elastic Block Store) fornece armazenamento em bloco persistente e de alto desempenho para instâncias EC2."
    },
    {
        question: "Qual é o conceito de 'pay-as-you-go' na AWS?",
        options: [
            "A) Pagamento mensal fixo",
            "B) Pagamento apenas pelos recursos utilizados",
            "C) Pagamento anual antecipado",
            "D) Pagamento baseado em contratos"
        ],
        correct: 1,
        explanation: "Pay-as-you-go significa pagar apenas pelos recursos que você realmente utiliza, sem compromissos de longo prazo ou taxas iniciais."
    },
    {
        question: "Qual serviço AWS é usado para orquestração de containers?",
        options: [
            "A) Amazon ECS",
            "B) AWS Lambda",
            "C) Amazon EC2",
            "D) AWS Batch"
        ],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) é um serviço de orquestração de containers totalmente gerenciado."
    },
    {
        question: "O que é AWS Trusted Advisor?",
        options: [
            "A) Serviço de backup",
            "B) Ferramenta de recomendações para otimização",
            "C) Sistema de monitoramento",
            "D) Serviço de segurança"
        ],
        correct: 1,
        explanation: "AWS Trusted Advisor fornece recomendações em tempo real para ajudar a otimizar custos, melhorar performance, segurança e confiabilidade."
    },
    {
        question: "Qual tipo de instância EC2 é melhor para workloads com uso de CPU consistente?",
        options: [
            "A) Burstable instances (T3)",
            "B) General purpose instances (M5)",
            "C) Memory optimized instances (R5)",
            "D) Compute optimized instances (C5)"
        ],
        correct: 1,
        explanation: "General purpose instances (M5) oferecem um equilíbrio de compute, memória e rede, sendo ideais para workloads com uso consistente de CPU."
    },
    {
        question: "O que é Amazon Route 53?",
        options: [
            "A) Serviço de CDN",
            "B) Serviço DNS escalável",
            "C) Serviço de VPN",
            "D) Serviço de load balancing"
        ],
        correct: 1,
        explanation: "Amazon Route 53 é um serviço DNS (Domain Name System) altamente disponível e escalável."
    },
    {
        question: "Qual é a durabilidade do Amazon S3 Standard?",
        options: [
            "A) 99.9%",
            "B) 99.99%",
            "C) 99.999999999% (11 9's)",
            "D) 99.95%"
        ],
        correct: 2,
        explanation: "Amazon S3 Standard oferece durabilidade de 99.999999999% (11 9's), projetado para sustentação de perda de dados em duas instalações simultaneamente."
    },
    {
        question: "Qual serviço AWS é usado para deploy e gerenciamento de aplicações?",
        options: [
            "A) AWS CodeDeploy",
            "B) AWS Elastic Beanstalk",
            "C) AWS CloudFormation",
            "D) Todas as opções acima"
        ],
        correct: 3,
        explanation: "Todos os serviços mencionados podem ser usados para deploy e gerenciamento: CodeDeploy para automação de deploy, Elastic Beanstalk para aplicações web, e CloudFormation para infraestrutura como código."
    },
    {
        question: "O que significa RTO (Recovery Time Objective)?",
        options: [
            "A) Quantidade de dados que pode ser perdida",
            "B) Tempo máximo aceitável para restaurar um sistema",
            "C) Frequência de backups",
            "D) Tempo de retenção de dados"
        ],
        correct: 1,
        explanation: "RTO (Recovery Time Objective) é o tempo máximo aceitável que um sistema pode ficar indisponível após um incidente."
    },
    {
        question: "Qual serviço AWS fornece cache em memória?",
        options: [
            "A) Amazon RDS",
            "B) Amazon ElastiCache",
            "C) Amazon S3",
            "D) Amazon DynamoDB"
        ],
        correct: 1,
        explanation: "Amazon ElastiCache é um serviço de cache em memória totalmente gerenciado que suporta Redis e Memcached."
    },
    {
        question: "O que é AWS CloudTrail?",
        options: [
            "A) Serviço de monitoramento de performance",
            "B) Serviço de auditoria e logging de API calls",
            "C) Ferramenta de backup",
            "D) Serviço de CDN"
        ],
        correct: 1,
        explanation: "AWS CloudTrail registra e monitora todas as chamadas de API feitas na conta AWS, fornecendo auditoria e compliance."
    },
    {
        question: "Qual é a principal diferença entre Availability Zone (AZ) e Region?",
        options: [
            "A) AZ é maior que Region",
            "B) Region contém múltiplas AZs",
            "C) AZ e Region são sinônimos",
            "D) Region é apenas para backup"
        ],
        correct: 1,
        explanation: "Uma Region AWS contém múltiplas Availability Zones (AZs), que são data centers isolados dentro de uma região geográfica."
    },
    {
        question: "Qual serviço AWS é usado para machine learning sem necessidade de expertise em ML?",
        options: [
            "A) Amazon SageMaker",
            "B) Amazon Rekognition",
            "C) AWS DeepLens",
            "D) Amazon Comprehend"
        ],
        correct: 1,
        explanation: "Amazon Rekognition oferece análise de imagem e vídeo baseada em machine learning sem requerer expertise em ML."
    },
    {
        question: "O que é AWS Shield?",
        options: [
            "A) Serviço de backup",
            "B) Proteção contra ataques DDoS",
            "C) Ferramenta de monitoramento",
            "D) Serviço de VPN"
        ],
        correct: 1,
        explanation: "AWS Shield é um serviço de proteção contra ataques DDoS que protege aplicações rodando na AWS."
    },
    {
        question: "Qual é o menor período de faturamento para instâncias EC2 On-Demand?",
        options: [
            "A) 1 segundo",
            "B) 1 minuto",
            "C) 1 hora",
            "D) 1 dia"
        ],
        correct: 1,
        explanation: "Instâncias EC2 On-Demand são faturadas por segundo (com mínimo de 60 segundos) para a maioria dos tipos de instância."
    },
    {
        question: "Qual serviço AWS é usado para processamento de dados em lote?",
        options: [
            "A) AWS Batch",
            "B) Amazon Kinesis",
            "C) AWS Lambda",
            "D) Amazon SQS"
        ],
        correct: 0,
        explanation: "AWS Batch permite executar jobs de processamento em lote de forma eficiente e escalável."
    },
    {
        question: "O que é Amazon CloudFormation?",
        options: [
            "A) Serviço de CDN",
            "B) Infraestrutura como código",
            "C) Serviço de monitoramento",
            "D) Ferramenta de backup"
        ],
        correct: 1,
        explanation: "Amazon CloudFormation permite criar e gerenciar recursos AWS usando templates, implementando infraestrutura como código."
    },
    {
        question: "Qual é o conceito de 'elasticidade' na computação em nuvem?",
        options: [
            "A) Capacidade de backup automático",
            "B) Capacidade de escalar recursos automaticamente baseado na demanda",
            "C) Resistência a falhas",
            "D) Velocidade de processamento"
        ],
        correct: 1,
        explanation: "Elasticidade é a capacidade de escalar recursos para cima ou para baixo automaticamente baseado na demanda em tempo real."
    },
    {
        question: "Qual serviço AWS é usado para análise de logs em tempo real?",
        options: [
            "A) Amazon CloudWatch Logs",
            "B) AWS CloudTrail",
            "C) Amazon Kinesis Data Analytics",
            "D) Amazon Elasticsearch Service"
        ],
        correct: 2,
        explanation: "Amazon Kinesis Data Analytics permite analisar dados de streaming em tempo real, incluindo logs."
    },
    {
        question: "O que é AWS WAF?",
        options: [
            "A) Serviço de backup",
            "B) Web Application Firewall",
            "C) Serviço de DNS",
            "D) Ferramenta de monitoramento"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) protege aplicações web contra exploits comuns que podem afetar disponibilidade, comprometer segurança ou consumir recursos excessivos."
    },
    {
        question: "Qual classe de armazenamento S3 é mais econômica para dados raramente acessados?",
        options: [
            "A) S3 Standard",
            "B) S3 Intelligent-Tiering",
            "C) S3 Glacier Deep Archive",
            "D) S3 Standard-IA"
        ],
        correct: 2,
        explanation: "S3 Glacier Deep Archive é a classe de armazenamento mais econômica para dados que são raramente acessados e arquivamento de longo prazo."
    },
    {
        question: "Qual serviço AWS fornece desktop virtual na nuvem?",
        options: [
            "A) Amazon EC2",
            "B) Amazon WorkSpaces",
            "C) AWS AppStream 2.0",
            "D) Amazon Lightsail"
        ],
        correct: 1,
        explanation: "Amazon WorkSpaces é um serviço de desktop virtual totalmente gerenciado e seguro que roda na nuvem AWS."
    },
    {
        question: "O que é AWS Support?",
        options: [
            "A) Serviço gratuito apenas",
            "B) Planos de suporte técnico pagos e gratuitos",
            "C) Apenas documentação online",
            "D) Suporte apenas para enterprise"
        ],
        correct: 1,
        explanation: "AWS Support oferece diferentes planos (Basic gratuito, Developer, Business, Enterprise) com níveis variados de suporte técnico."
    },
    {
        question: "Qual serviço AWS é usado para criar APIs RESTful?",
        options: [
            "A) Amazon API Gateway",
            "B) AWS Lambda",
            "C) Amazon CloudFront",
            "D) Amazon Route 53"
        ],
        correct: 0,
        explanation: "Amazon API Gateway é um serviço totalmente gerenciado para criar, publicar, manter, monitorar e proteger APIs RESTful e WebSocket."
    },
    {
        question: "Qual é o benefício principal das Reserved Instances?",
        options: [
            "A) Maior performance",
            "B) Desconto significativo em troca de compromisso de uso",
            "C) Mais flexibilidade",
            "D) Melhor segurança"
        ],
        correct: 1,
        explanation: "Reserved Instances oferecem desconto significativo (até 75%) em troca de compromisso de uso por 1 ou 3 anos."
    },
    {
        question: "O que é Amazon Athena?",
        options: [
            "A) Banco de dados relacional",
            "B) Serviço de análise de dados serverless",
            "C) Ferramenta de backup",
            "D) Serviço de CDN"
        ],
        correct: 1,
        explanation: "Amazon Athena é um serviço de análise interativa serverless que facilita analisar dados no S3 usando SQL padrão."
    },
    {
        question: "Qual serviço AWS é usado para descoberta e classificação de dados sensíveis?",
        options: [
            "A) AWS Inspector",
            "B) Amazon Macie",
            "C) AWS GuardDuty",
            "D) AWS Config"
        ],
        correct: 1,
        explanation: "Amazon Macie é um serviço de segurança que usa machine learning para descobrir e classificar automaticamente dados sensíveis na AWS."
    }
];

// Variáveis globais
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 90 * 60; // 90 minutos em segundos
let userAnswers = new Array(questions.length).fill(null);

// Inicialização do quiz
function initQuiz() {
    document.getElementById('total-questions').textContent = questions.length;
    updateTimerDisplay();
    startTimer();
    showQuestion();
}

// Mostrar questão atual
function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestion];
    
    quizContainer.innerHTML = `
        <div class="question-container active">
            <div class="question-number">Questão ${currentQuestion + 1}</div>
            <div class="question-text">${question.question}</div>
            <ul class="options">
                ${question.options.map((option, index) => {
                    let optionClass = 'option';
                    if (userAnswers[currentQuestion] !== null) {
                        if (index === question.correct) {
                            optionClass += ' correct';
                        } else if (userAnswers[currentQuestion] === index) {
                            optionClass += ' incorrect';
                        }
                    }
                    return `
                        <li class="${optionClass}">
                            <input type="radio" id="option-${index}" name="option" value="${index}" 
                                ${userAnswers[currentQuestion] === index ? 'checked' : ''}
                                ${userAnswers[currentQuestion] !== null ? 'disabled' : ''}>
                            <label for="option-${index}">${option}</label>
                        </li>
                    `;
                }).join('')}
            </ul>
            
            ${userAnswers[currentQuestion] !== null ? `
                <div class="explanation">
                    <h4>Explicação:</h4>
                    <p>${question.explanation}</p>
                </div>
            ` : ''}
            
            <div class="navigation">
                <button class="btn btn-secondary" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>Anterior</button>
                <button class="btn btn-primary" onclick="nextQuestion()">${currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}</button>
            </div>
        </div>
    `;
    
    document.getElementById('current-question').textContent = currentQuestion + 1;
    updateProgress();
}

// Próxima questão
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
        
        if (userAnswers[currentQuestion] === questions[currentQuestion].correct) {
            score++;
            document.getElementById('score').textContent = score;
        }
    } else if (userAnswers[currentQuestion] === null) {
        // Se não selecionou e não havia resposta anterior, não avança
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

// Questão anterior
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

// Temporizador
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Finalizar quiz
function finishQuiz() {
    clearInterval(timer);
    
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results');
    const finalScore = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');
    
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    finalScore.textContent = `${score}/${questions.length}`;
    
    const percentage = (score / questions.length) * 100;
    if (percentage >= 70) {
        resultMessage.textContent = "Parabéns! Você atingiu a pontuação necessária para a certificação AWS Cloud Practitioner.";
    } else {
        resultMessage.textContent = "Continue estudando! Você ainda não atingiu a pontuação necessária. Recomendamos revisar os conceitos básicos da AWS.";
    }
}

// Reiniciar quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 90 * 60;
    userAnswers = new Array(questions.length).fill(null);
    
    document.getElementById('score').textContent = '0';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    startTimer();
    showQuestion();
}

// Iniciar o quiz quando a página carregar
window.onload = initQuiz;
// Debug: Verificar se elementos existem
console.log("Elementos encontrados:");
console.log("quiz-container:", document.getElementById('quiz-container'));
console.log("current-question:", document.getElementById('current-question'));
console.log("total-questions:", document.getElementById('total-questions'));
console.log("timer:", document.getElementById('timer'));
console.log("score:", document.getElementById('score'));
console.log("progress:", document.getElementById('progress'));
console.log("results:", document.getElementById('results'));
