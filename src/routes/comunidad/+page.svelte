<script>
    // Importación de imágenes
    import hernan from '$lib/assets/hernan.jfif';
    import rodrigo from '$lib/assets/rodrigo.jfif';
    import edwin from '$lib/assets/edwin.jpg';
    import carlos from '$lib/assets/carlos.jfif';
    import ricardo from '$lib/assets/ricardo.jpg';
    import mariana from '$lib/assets/mariana.jfif';
    import omar from '$lib/assets/omar.jfif';
    import grupo from '$lib/assets/grupo.jfif';
</script>

<!--Framework del diseño-->
<div class="pagina-comunidad">
    <div class="Framework-equipo">
        <!--Titulo-->
        <h1 class="Meet">MEET THE TEAM</h1>
        <!--Imagen del grupo y miembros-->
        <div class="imagenes-team">
            <img 
                src={grupo} 
                alt="Equipo Principal" 
                class="Cuadro-gris-0" 
            />

            <!--Líder del equipo (Hernán)-->
			<div class="Clase-Hernan">
				<img src={hernan} alt="Hernán Salgado" class="Cuadro-gris-1" />
				<h2 class="Nombre-1">Hernán Abaunza</h2>
				<h3 class="Rol">LÍDER / ASESOR DEL GRUPO</h3>
				<a href="mailto:hernan@tec.mx" class="Redes">
					<!-- Icono de sobre/correo para Outlook -->
					<svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect width="20" height="16" x="2" y="4" rx="2"/>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
					</svg>
					<span>habaunza@tec.mx</span>
				</a>
			</div>

            <!--Integrantes del equipo recorridos-->
            <div class="Clase-Ro">
                <img src={rodrigo} alt="Rodrigo Reveles" class="Cuadro-gris-2" />
                <h2 class="Nombre-2">Rodrigo Reveles</h2>
                <h3 class="Rol">PRESIDENTE</h3>
                <a href="https://instagram.com/rodrigo_vvvvv" target="_blank" rel="noopener noreferrer" class="Redes">
                    <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@rodrigo_vvvvv</span>
                </a>
            </div>

            <div class="Clase-Chewin">
                <img src={edwin} alt="Alejandro Mojarras" class="Cuadro-gris-3" />
                <h2 class="Nombre-3">Alejandro Mojarras</h2>
                <h3 class="Rol">VICEPRESIDENTE</h3>
                <a href="https://instagram.com/alejandro_mojarras" target="_blank" rel="noopener noreferrer" class="Redes">
                    <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@alejandro_mojarras</span>
                </a>
            </div>

            <div class="Clase-Mister">
                <img src={carlos} alt="Carlos Lopez" class="Cuadro-gris-4" />
                <h2 class="Nombre-4">Carlos Lopez</h2>
                <h3 class="Rol">FINANZAS</h3>
                <a href="https://instagram.com/elcharlie226" target="_blank" rel="noopener noreferrer" class="Redes">
                    <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@elcharlie226</span>
                </a>
            </div>

            <div class="Clase-Ricky">
                <img src={ricardo} alt="Ricardo González" class="Cuadro-gris-5" />
                <h2 class="Nombre-5">Ricardo González</h2>
                <h3 class="Rol">LOGÍSTICA Y OPERACIONES</h3>
                <a href="https://instagram.com/rickster_2004" target="_blank" rel="noopener noreferrer" class="Redes">
                    <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@rickster_2004</span>
                </a>
            </div>

            <div class="Clase-Yaya">
                <img src={mariana} alt="Mariana Martínez" class="Cuadro-gris-6" />
                <h2 class="Nombre-6">Mariana Martínez</h2>
                <h3 class="Rol">IMAGEN</h3>
                <a href="https://instagram.com/llaya_06" target="_blank" rel="noopener noreferrer" class="Redes">
                    <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@llaya_06</span>
                </a>
            </div>

            <div class="Clase-RH">
                <img src={omar} alt="Omar Verduzco" class="Cuadro-gris-7" />
                <h2 class="Nombre-7">Omar Verduzco</h2>
                <h3 class="Rol">RECURSOS HUMANOS</h3>
                <a href="https://instagram.com/overduzc_0003" target="_blank" rel="noopener noreferrer" class="Redes">
                    <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span>@overduzc_0003</span>
                </a>
            </div>
        </div>
    </div>
</div>

<!--Organización, color y tamaño de cada framework-->
<style>
    /*Fondo que engloba todo*/
    .pagina-comunidad {
        background-color: #ffffff; 
        color: #1a1a1a;        
        width: 100%;
    }
    /*Framework de la imagen del equipo*/
    .Framework-equipo {
        padding: 30px 40px;
        max-width: 1440px; 
        margin: 0 auto;
    }
    /*Titulo*/
    .Meet {
        font-family: sans-serif;
        font-size: 48px;
        font-style: italic;
        font-weight: 300;
        color: #333;
        margin-bottom: 30px;
    }
    /*Estructura de las imágenes*/
    .imagenes-team {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
    }

    /*Foto principal*/
    .Cuadro-gris-0 {
        grid-column: span 2; 
        grid-row: span 1;    
        background-color: #d1d1d1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    /*Fotos individuales*/
    .Cuadro-gris-1,
    .Cuadro-gris-2,
    .Cuadro-gris-3,
    .Cuadro-gris-4,
    .Cuadro-gris-5,
    .Cuadro-gris-6,
    .Cuadro-gris-7 {
        background-color: #d1d1d1;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        display: block;
    }

    /*Contenedores*/
    .Clase-Hernan,
    .Clase-Ro,
    .Clase-Chewin,
    .Clase-Mister,
    .Clase-Yaya,
    .Clase-Ricky {
        font-family: serif;
        font-size: 24px;
        font-style: italic;
        font-weight: normal;
        color: #1a1a1a;
    }

    /*Ajuste para centrar al último integrante en la tercera fila*/
    .Clase-RH {
        font-family: serif;
        font-size: 24px;
        font-style: italic;
        font-weight: normal;
        color: #1a1a1a;
        grid-column: 2 / span 2; /* Ocupa el centro de las 4 columnas */
        max-width: calc(50% - 15px); /* Mantiene el tamaño proporcional de los demás */
        margin: 0 auto;
        width: 100%;
    }

    /*Nombres*/
    .Nombre-1,
    .Nombre-2,
    .Nombre-3,
    .Nombre-4,
    .Nombre-5,
    .Nombre-6,
    .Nombre-7 {
        font-family: serif;
        font-size: 22px;
        font-style: italic;
        font-weight: normal;
        color: #1a1a1a;
        margin: 10px 0 0 0;
    }

    /*Roles*/
    .Rol {
        font-family: sans-serif;
        font-size: 12px;
        font-weight: bold;
        color: #444;
        margin: 3px 0 0 0;
        text-transform: uppercase;
        font-style: normal;
    }

    /*Redes*/
    .Redes {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: sans-serif;
        font-size: 12px;
        font-style: normal;
        color: #666;
        margin-top: 4px;
        text-decoration: none;
        transition: color 0.2s ease;
    }
    /*Cambia color de la red al pasar el cursor*/
    .Redes:hover {
        color: #e1306c;
    }
    /*Icono de insta*/
    .ig-icon {
        width: 14px;
        height: 14px;
    }

    /* Responsive */
    @media (max-width: 900px) {
        .Framework-equipo {
            padding: 20px;
        }
        /*Estructura de las imagenes en celular*/
        .imagenes-team {
            grid-template-columns: repeat(2, 1fr);
        }
        /*Ajusta la foto principal*/
        .Cuadro-gris-0 {
            grid-column: span 2;
            aspect-ratio: 2 / 1;
            height: auto;
        }
        /*En móvil, Omar toma el ancho completo de su columna normal*/
        .Clase-RH {
            grid-column: auto;
            max-width: 100%;
        }
    }
</style>