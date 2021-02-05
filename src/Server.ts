import app from './App';

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Subiu na porta ${port}, ou click em http://localhost:${port}`))