
        // Dark/Light Mode Toggle
        function toggleTheme() {
            const body = document.body;
            const btn = document.querySelector('.theme-toggle');
            
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                btn.textContent = '🌙 Dark';
            } else {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                btn.textContent = '☀️ Light';
            }
        }

        // Load saved theme on page load
        window.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            if (savedTheme === 'light') {
                document.body.classList.add('light-mode');
                document.querySelector('.theme-toggle').textContent = '☀️ Light';
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    