<template>
  <div class="home">
    <div class="barra"></div>
    <div class="chat">
    </div>
    <nav>
      <img src="../../assets/assets/logo.png">
        <button><a href="#/Login">SignUp</a></button>
        <button>SignIn</button>
        <button>About</button>
    </nav>
    <section class="banner">
    </section>
  </div>
</template>

<style lang="scss">
  .barra {
    width: 100%;
    height: 40px;
    background: white;
  }
  nav {
    width: 100%;
    height: 100px;
    background: #EBE7E1;
  }

  button {
    margin-top: 22px;
    color: #776464;
    height: 50px;
    line-height: 50px;
    padding: 0px 20px;
    font-size: 20px;
    background: transparent;
    border: none;
    display: flex;
    cursor: pointer;
    transition: 1.0s;
    float: right;
  }

  button:hover {
    color: white;
    transition: 1.0s;
    cursor: pointer;
    border: none;
  }

  section {
    width: 100%;
    height: 10000px;
    background: #776464;
  }

  .chat {
    margin-top: 450px;
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background: #FFF;
    float: right;
    position: absolute;
    cursor: pointer;
    transition: 1.0s;
  }
  .chat:hover {
    margin-top: 450px;
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background: #ccc;
  }
</style>

<script>

export default {
  name: 'Home'
}
</script>
