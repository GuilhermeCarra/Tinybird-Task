import Home from './pages/home/Home';

const app = async () => {
    new Home().render();
};

document.addEventListener("DOMContentLoaded", app);