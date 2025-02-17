const adjectives = ["kind", "caring", "generous", "thoughtful", "compassionate", "intelligent", "creative", "honest", "reliable", "trustworthy", "loyal", "friendly", "energetic", "optimistic", "patient", "dedicated", "hardworking", "ambitious", "charming", "humble", "respectful", "inspiring", "supportive", "sincere", "wise", "funny", "brave", "courageous", "adventurous", "affectionate", "loving", "gracious", "understanding", "calm", "innovative", "dynamic", "proactive", "responsible", "resourceful", "determined", "hardworking", "organized", "helpful", "dedicated", "modest", "balanced", "open-minded", "fair", "considerate", "gentle", "playful", "positive", "respectable", "confident", "insightful", "articulate", "focused", "persistent", "fun-loving", "spontaneous", "polite", "joyful", "humorous", "grateful", "encouraging", "grounded", "quick-witted", "peaceful", "innovative", "independent", "honorable", "brilliant", "receptive", "passionate", "beautiful", "stylish", "fierce", "cooperative", "modest", "optimistic", "resourceful", "affable", "calm", "thought-provoking", "reliable", "selfless", "organized", "tolerant", "intuitive", "diligent", "fun", "expressive", "outgoing", "vibrant", "respectful", "loyal", "gracious", "accountable", "motivated", "admirable"];

        function spinAdjective() {
            let spinner = document.getElementById("adjective");
            let spins = 10;
            let interval = setInterval(() => {
                spinner.textContent = adjectives[Math.floor(Math.random() * adjectives.length)];
            }, 100);
            
            setTimeout(() => {
                clearInterval(interval);
                let finalAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
                spinner.textContent = finalAdjective;
                spinner.classList.add("bounce");
                setTimeout(() => spinner.classList.remove("bounce"), 500);
                updateLink();
            }, spins * 100);
        }

        function updateLink() {
            let noun = document.querySelector(".selected-option").textContent;
            let adjective = document.getElementById("adjective").textContent;
            let url = `${window.location.origin}${window.location.pathname}?noun=${encodeURIComponent(noun)}&adjective=${encodeURIComponent(adjective)}`;
            document.getElementById("copy-link").value = url;
        }

        function copyLink() {
            let copyText = document.getElementById("copy-link");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
            document.getElementById("copy-message").textContent = "Copied!";
            setTimeout(() => document.getElementById("copy-message").textContent = "", 2000);
        }

        function getQueryParams() {
            const params = new URLSearchParams(window.location.search);
            const noun = params.get("noun");
            const adjective = params.get("adjective");
            if (noun) {
                document.querySelector(".selected-option").textContent = noun;
            }
            if (adjective) {
                document.getElementById("adjective").textContent = adjective;
            }
        }

        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle("dark-mode");
            const isDarkMode = body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDarkMode);
        }

        function loadDarkModePreference() {
            const isDarkMode = localStorage.getItem("darkMode") === "true";
            if (isDarkMode) {
                document.body.classList.add("dark-mode");
            }
        }

        function toggleDropdown() {
            const options = document.querySelector(".options");
            options.classList.toggle("show");
        }

        function selectOption(value) {
            document.querySelector(".selected-option").textContent = value;
            document.querySelector(".options").classList.remove("show");
            updateLink();
        }

        // Close dropdown when clicking outside
        document.addEventListener("click", (event) => {
            const dropdown = document.getElementById("custom-dropdown");
            if (!dropdown.contains(event.target)) {
                document.querySelector(".options").classList.remove("show");
            }
        });

        window.onload = () => {
            getQueryParams();
            loadDarkModePreference();
        };