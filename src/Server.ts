import app from './App';

const port = 3333 || process.env.PORT;

app.listen(port, () => console.log(`Subiu na porta ${port}, ou click em http://localhost:${port}`))