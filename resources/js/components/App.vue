<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color:#142850;">
            <router-link to="/" class="navbar-brand link-navbar" exact>HippoAcademy</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/about" class="nav-link link-navbar" exact>About</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/contact" class="nav-link link-navbar" exact>Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .router-link-active{
        color: #00909e !important;
    }
    .link-navbar{
        font-family: 'Arvo', serif;
    }
    .link-navbar:hover{
        color: #4de8f7 !important;
    }
</style>>

</style>
