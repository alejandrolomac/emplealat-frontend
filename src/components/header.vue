<template>
    <header id="navbar">
        <div class="container">

            <a class="navbar-logo" href="/">
                <h1 class="m-0">
                    <img src="../assets/images/logo3.png">
                </h1>
            </a>

            <input id="navbar-btn" type="checkbox"  class="navbar-btn-mobile"/>
            <label for="navbar-btn" class="navbar-btn-label">
                <i class="fas fa-bars"></i>
                <i class="fas fa-times"></i>
            </label>

            <nav id="navbar-menu">
                <ul>
                    <li class="ml-3"><router-link :to="{ name: 'Home' }" tooltip="Inicio" flow="down"><i class="fa fa-home"></i></router-link></li>
                    <li class="ml-3"><router-link :to="{ name:'Home' }" tooltip="Trabajos" flow="down"><i class="fa fa-building"></i></router-link></li>
                    <li class="ml-3"><a href="#" tooltip="Contactanos" flow="down"><i class="fa fa-envelope"></i></a></li>
                    <li class="ml-3"><a href="#" tooltip="Perfil" flow="down"><i class="fas fa-user"></i></a></li>
                </ul>
            </nav>

        </div><!--End of Container-->
    </header><!--End of Header-->
</template>

<script>
    export default {
        name: 'Header'
    }
</script>