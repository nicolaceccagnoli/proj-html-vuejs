import { reactive } from 'vue';

export const store = reactive ({

    // Creo una variabile globale per l'offcanvas delle Mappe
    showMapOffcanvas: false,
    // Creo una variabile globale per l'offcanvas delle Mappe
    showSearchOffcanvas: false,
    // Creo una variabile globale per l'offcanvas delle Mappe
    showShopOffcanvas: false,
    // Definisco un array di oggetti per le info in comune
    infoContainer: [
        {
            icon: 'bi bi-telephone-fill',
            info: '+1 (305) 1234-5678'
        },
        {
            icon: 'bi bi-envelope-fill',
            info: 'mail@example.com'
        },
        {
            icon: 'bi bi-geo-alt-fill',
            info: 'Main Avenue, 123'
        }
    ],
    // Definisco un array di oggetti per i profili social
    socialProfiles: [
        {
            icon: 'bi bi-facebook',
            social: 'Facebook',
        },
        {
            icon: 'bi bi-twitter',
            social: 'Twitter',
        },
        {
            icon: 'bi bi-linkedin',
            social: 'LinkedIn',
        }
    ]
})