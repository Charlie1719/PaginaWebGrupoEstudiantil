<script>
    //Obtiene la informacion de la sesion desde el store de SvelteKit, extrae el usuario y su nombre
    import { page } from '$app/stores';
    $: user = $page.data.user;
    $: nombre = $page.data.nombreUsuario;
    //Estado para controlar si el menu movil esta abierto o cerrado
    let menuAbierto = false;

    function toggleMenu() {
        menuAbierto = !menuAbierto;
    }

</script>

<!--Framework de navegacion principal-->
<nav class="navbar">
    <!--Logo de la organizacion-->
    <div class="logo">
        <a href="/">
            <img src="/logo.svg" alt="DRONE OPS" />
        </a>
    </div>

    <!--Enlaces de navegacion principal-->
    <div class="nav-links" class:abierto={menuAbierto}>
        <a href="/" on:click={() => menuAbierto = false}>Inicio</a>
        <a href="/#objetivo" on:click={() => menuAbierto = false}>Objetivo</a>
        <a href="/unete" on:click={() => menuAbierto = false}>Unirse</a>
        
        <!--Muestra la seccion si el usuario ha iniciado sesion-->
        {#if user}
            <a href="/por-hacer" on:click={() => menuAbierto = false}>Por hacer</a>
        {/if}
        
        <a href="/comunidad" on:click={() => menuAbierto = false}>Comunidad</a>

        <!--Opciones de usuario para la vista movil-->
        {#if user}
            <span class="user-display user-display-movil">
                {nombre || user.email}
            </span>
            <form action="/cerrar_sesion" method="POST" class="btn-miembros-movil" style="margin-top: 10px;">
                <button type="submit" class="btn-salir-movil" on:click={() => menuAbierto = false}>Cerrar Sesión</button>
            </form>
        {:else}
            <a href="/iniciar_sesion" class="btn-miembros btn-miembros-movil" on:click={() => menuAbierto = false}>
                Iniciar sesión
            </a>
        {/if}
    </div>

    <!--Opciones de usuario para la vista de escritorio-->
    <div class="actions">
        {#if user}
            <div class="user-badge-container">
                <div class="user-badge">
                    <span class="user-email">{nombre || user.email}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="7" r="4"/>
                        <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
                    </svg>
                </div>
                <!--Formulario para cerrar sesion en escritorio-->
                <form action="/cerrar_sesion" method="POST">
                    <button type="submit" class="btn-salir">Salir</button>
                </form>
            </div>
        {:else}
            <a href="/iniciar_sesion" class="btn-miembros">
                Iniciar sesión
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
                </svg>
            </a>
        {/if}
    </div>

    <!--Boton tipo hamburguesa para desplegar el menu movil-->
    <button class="hamburguesa" on:click={toggleMenu} aria-label="Abrir menú">
        <span class:activa={menuAbierto}></span>
        <span class:activa={menuAbierto}></span>
        <span class:activa={menuAbierto}></span>
    </button>
</nav>

<style>
    /*Contenedor principal de la barra de navegacion*/
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 3rem;
        background-color: #12151e; 
        border-bottom: 1px solid #1e2230;
        position: relative;
    }

    /*Tamaño de la imagen del logo*/
    .logo img {
        height: 32px;
    }

    /*Contenedor de los enlaces de navegacion*/
    .nav-links {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }

    /*Estilo de los enlaces individuales*/
    .nav-links a {
        color: #94a3b8;
        text-decoration: none;
        font-family: sans-serif;
        font-size: 0.95rem;
        transition: color 0.2s;
    }

    /*Cambia el color del enlace al pasar el cursor*/
    .nav-links a:hover {
        color: #ffffff;
    }

    /*Estilo base para el boton de miembros y la tarjeta de usuario*/
    .btn-miembros, .user-badge {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: 1px solid #2e3548;
        border-radius: 6px;
        color: #ffffff;
        padding: 0.5rem 1.2rem;
        font-size: 0.9rem;
        text-decoration: none;
    }

    /*Cursor para el boton de inicio de sesion*/
    .btn-miembros {
        cursor: pointer;
    }

    /*Efecto de borde morado al pasar el cursor por el boton de miembros*/
    .btn-miembros:hover {
        border-color: #7c3aed; 
    }

    /*Diseño de la tarjeta de usuario autenticado*/
    .user-badge {
        border-color: #7c3aed;
        background-color: rgba(124, 58, 237, 0.1);
    }

    /*Texto del correo o nombre en la tarjeta de usuario*/
    .user-email {
        font-size: 0.85rem;
        color: #e2e8f0;
        font-weight: 500;
    }

    /*Oculta en escritorio los elementos exclusivos de movil*/
    .btn-miembros-movil, .user-display-movil {
        display: none;
    }

    /*Estilo del nombre del usuario en la vista movil*/
    .user-display-movil {
        color: #a78bfa;
        font-weight: 600;
        font-size: 0.9rem;
    }

    /*Boton hamburguesa oculto por defecto en escritorio*/
    .hamburguesa {
        display: none;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 8px;
    }

    /*Lineas horizontales del boton hamburguesa*/
    .hamburguesa span {
        width: 24px;
        height: 2px;
        background-color: #ffffff;
        transition: transform 0.3s, opacity 0.3s;
    }

    /*Transformacion de la primera linea en una X*/
    .hamburguesa span.activa:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }
    /*Oculta la linea central al activar el menu*/
    .hamburguesa span.activa:nth-child(2) {
        opacity: 0;
    }
    /*Transformacion de la tercera linea en una X*/
    .hamburguesa span.activa:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    /*RESPONSIVE del celular*/
    @media (max-width: 768px) {
        /*Reduce el padding lateral del navbar*/
        .navbar {
            padding: 1rem 1.5rem;
        }

        /*Muestra el boton hamburguesa*/
        .hamburguesa {
            display: flex;
        }

        /*Oculta el bloque de acciones de escritorio*/
        .actions {
            display: none;
        }

        /*Despliega los enlaces en formato de menu vertical movil*/
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: #12151e;
            border-bottom: 1px solid #1e2230;
            padding: 1.5rem;
            gap: 1.5rem;
        }

        /*Muestra el menu desplegable en movil al estar abierto*/
        .nav-links.abierto {
            display: flex;
        }

        /*Muestra y centra los elementos de usuario en movil*/
        .btn-miembros-movil, .user-display-movil {
            display: flex;
            justify-content: center;
            width: 100%;
        }
    }
    /*Contenedor de la tarjeta de usuario y el boton salir*/
    .user-badge-container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    /*Boton para cerrar sesion en escritorio*/
    .btn-salir {
        background: transparent;
        border: 1px solid #ef4444;
        border-radius: 6px;
        color: #ef4444;
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    /*Efecto hover para el boton de salir en escritorio*/
    .btn-salir:hover {
        background-color: rgba(239, 68, 68, 0.1);
    }

    /*Boton para cerrar sesion en la vista movil*/
    .btn-salir-movil {
        background: transparent;
        border: 1px solid #ef4444;
        color: #ef4444;
        width: 100%;
        padding: 0.75rem;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
    }
</style>