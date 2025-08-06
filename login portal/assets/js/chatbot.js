// Chatbot functionality
class ChatbotManager {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        const chatbotBtn = document.getElementById('chatbot-btn');
        const chatbotSidebar = document.getElementById('chatbot-sidebar');
        const chatbotClose = document.getElementById('chatbot-close');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');

        if (chatbotBtn) {
            chatbotBtn.onclick = () => this.open();
        }

        if (chatbotClose) {
            chatbotClose.onclick = () => this.close();
        }

        if (chatbotSend) {
            chatbotSend.onclick = () => this.sendMessage();
        }

        if (chatbotInput) {
            chatbotInput.onkeypress = (e) => {
                if (e.key === 'Enter') this.sendMessage();
            };
        }
    }

    open() {
        const chatbotSidebar = document.getElementById('chatbot-sidebar');
        const chatbotInput = document.getElementById('chatbot-input');
        
        if (chatbotSidebar) {
            chatbotSidebar.classList.add('open');
            this.isOpen = true;
            chatbotInput?.focus();
        }
    }

    close() {
        const chatbotSidebar = document.getElementById('chatbot-sidebar');
        
        if (chatbotSidebar) {
            chatbotSidebar.classList.remove('open');
            this.isOpen = false;
        }
    }

    sendMessage() {
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotMessages = document.getElementById('chatbot-messages');
        
        if (!chatbotInput || !chatbotMessages) return;
        
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.textContent = message;
        chatbotMessages.appendChild(userMsg);

        // Clear input
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-message bot';
            botMsg.textContent = this.getBotResponse(message);
            chatbotMessages.appendChild(botMsg);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);

        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    getBotResponse(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('leave') || msg.includes('vacation')) {
            return "For leave requests, please submit your application through the HR portal or contact your manager directly.";
        } else if (msg.includes('payroll') || msg.includes('salary')) {
            return "For payroll inquiries, please reach out to the Finance team at finance@company.com or call ext. 1234.";
        } else if (msg.includes('policy') || msg.includes('handbook')) {
            return "You can find our company policies and employee handbook in the Documents section of this portal.";
        } else if (msg.includes('hello') || msg.includes('hi')) {
            return "Hello! How can I assist you with your HR needs today?";
        } else {
            return `I understand you need help with: '${message}'. For specific assistance, please contact HR at hr@company.com or call ext. 5678.`;
        }
    }
}
