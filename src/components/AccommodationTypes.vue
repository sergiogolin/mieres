<template>
  <div>
    <h1 class="brand">
      Hotel
      <span class="brand__title">Mieres del Camín Apartamentos</span>
      <span class="brand__rating">★★★★</span>
    </h1>

    <div class="accommodations">
      <AccommodationItem
        v-for="accommodation in accommodationItems"
        :key="accommodation.title"
        v-model="selectedAccommodation"
        :accommodation="accommodation" />
    </div>
  </div>
</template>

<script>
import AccommodationItem from '@/components/AccommodationItem.vue'

export default {
  name: 'AccommodationTypes',
  components: {
    AccommodationItem
  },
  data() {
    return {
      accommodationItems: [
        {
          title: 'Solo Alojamiento',
          features: [
            'Sin régimen',
            'Botella de agua de bienvenida'
          ]
        },
        {
          title: 'Alojamiento y Desayuno',
          features: [
            'Desayuno buffet completo'
          ]
        },
        {
          title: 'Media Pensión',
          features: [
            'Desayuno buffet completo',
            'Cena buffet',
            'No incluye'
          ]
        },
        {
          title: 'Todo incluido',
          features: [
            'Dispondrás de comida y bebida todo el día y durante toda tu estancia',
            'Restaurante buffet',
            'Snack Bar',
            'Servicio de bares (marcas nacionales)'
          ]
        },
        {
          title: 'Unlimited Services',
          features: [
            'Restaurante buffet con bebidas Premium',
            'Restaurante a la carta (una cena por estancia)',
            'Snack Bar con bebidas Premium',
            'Minibar incluido',
            'Acceso a SPA y 45 minutos de masaje por persona',
            'Actividades deportivas (acuáticas sin motor)',
            'Caja Fuerte',
            'Parking gratuito',
            'Lavandería'
          ]
        }
      ],

      selectedAccommodation: null
    }
  }
}
</script>

<style scoped lang="scss">
  .brand {
    color: var(--color-primary);
    font: var(--font-h2);

    &__title {
      font-weight: bold;
    }

    &__rating {
      margin-left: 0.5rem;
      color: gold;
    }
  }
  .accommodations {
    align-items: stretch;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
