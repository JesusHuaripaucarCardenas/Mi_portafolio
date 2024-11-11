$(document).ready(function() {
    $('#calendar').evoCalendar({
        
        calendarEvents: [
            // Fechas importantes de los ODS
            {
              id: 'event1',
              name: "Adopción de los ODS",
              description: "Los ODS fueron adoptados por la ONU el 25 de septiembre de 2015.",
              date: "September/25/2015",
              type: "milestone",
              everyYear: true
            },
            {
              id: 'event2',
              name: "Meta de Educación de Calidad",
              description: "Garantizar una educación inclusiva, equitativa y de calidad para 2030.",
              date: "December/31/2030",
              type: "goal",
              color: "#f57c00"
            },
            {
              id: 'event3',
              name: "Igualdad de Género",
              description: "Alcanzar la igualdad de género y empoderar a todas las mujeres y niñas para 2030.",
              date: "December/31/2030",
              type: "goal",
              color: "#d81b60"
            },
            {
              id: 'event4',
              name: "Acción por el Clima",
              description: "Tomar medidas urgentes para combatir el cambio climático para 2030.",
              date: "December/31/2030",
              type: "goal",
              color: "#43a047"
            },
            {
              id: 'event5',
              name: "Fin de la Pobreza",
              description: "Poner fin a la pobreza en todas sus formas en todo el mundo para 2030.",
              date: "December/31/2030",
              type: "goal",
              color: "#e53935"
            },
            {
              id: 'event6',
              name: "Agua limpia y saneamiento",
              description: "Garantizar la disponibilidad de agua y su gestión sostenible para 2030.",
              date: "December/31/2030",
              type: "goal",
              color: "#1e88e5"
            },
            {
              id: 'event7',
              name: "Alianzas para los ODS",
              description: "Fortalecer los medios de implementación y revitalizar la alianza mundial para el desarrollo sostenible para 2030.",
              date: "December/31/2030",
              type: "goal",
              color: "#8e24aa"
            },
            
            // Fechas importantes del calendario peruano
            {
              id: 'event8',
              name: "Año Nuevo",
              description: "Celebración del Año Nuevo.",
              date: "January/1/2024",
              type: "holiday"
            },
            {
              id: 'event9',
              name: "Día de la Madre",
              description: "Celebración del Día de la Madre.",
              date: "May/12/2024", // Segundo domingo de mayo
              type: "holiday"
            },
            {
              id: 'event10',
              name: "Día del Trabajo",
              description: "Conmemoración del Día Internacional del Trabajo.",
              date: "May/1/2024",
              type: "holiday"
            },
            {
              id: 'event11',
              name: "Fiestas Patrias",
              description: "Celebración de la independencia del Perú.",
              date: ["July/28/2024", "July/29/2024"], // Dos días
              type: "holiday"
            },
            {
              id: 'event12',
              name: "Día de la Canción Criolla",
              description: "Celebración del Día de la Canción Criolla.",
              date: "October/31/2024",
              type: "holiday"
            },
            {
              id: 'event13',
              name: "Día de Todos los Santos",
              description: "Celebración del Día de Todos los Santos.",
              date: "November/1/2024",
              type: "holiday"
            },
            {
              id: 'event14',
              name: "Navidad",
              description: "Celebración de la Navidad.",
              date: "December/25/2024",
              type: "holiday"
            },
            {
              id: 'event15',
              name: "Día del Maestro",
              description: "Celebración del Día del Maestro.",
              date: "July/6/2024",
              type: "holiday"
            },
            {
              id: 'event16',
              name: "Día del Padre",
              description: "Celebración del Día del Padre.",
              date: "June/16/2024", // Tercer domingo de junio
              type: "holiday"
            },
            {
              id: 'event17',
              name: "Día del Árbol",
              description: "Conmemoración del Día del Árbol.",
              date: "September/1/2024",
              type: "holiday"
            },
            {
              id: 'event18',
              name: "Día Internacional de la Mujer",
              description: "Conmemoración del Día Internacional de la Mujer.",
              date: "March/8/2024",
              type: "holiday"
            }
        ]
    })
})
