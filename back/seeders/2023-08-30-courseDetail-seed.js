'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courseDetails', [
      {
        title: 'Presentación',
        paragraph1: 'Nuestros instructores son expertos en la industria con años de experiencia. Aprendizaje práctico y teórico. Materiales de calidad incluidos. Oportunidades de práctica en vivo',
        paragraph2: '¿Te apasiona el arte de la manicura y la belleza de las uñas? Entonces nuestro Curso de Uñas Semipermanentes es la elección perfecta para ti. Desde la preparación de las uñas hasta la aplicación de esmalte semipermanente y la creación de decoraciones deslumbrantes, te proporcionaremos las habilidades necesarias para destacar en la industria de la belleza. Descubre cómo convertir las uñas en auténticas obras de arte y comienza tu camino hacia una carrera exitosa y creativa.',
        image1url: 'https://i.ibb.co/JBNjyvN/Sin-t-tulo2.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'Ser mayor a 18 años. Tener un interés genuino en la industria de la belleza y el maquillaje semipermanente.Tener disponibilidad de tiempo necesaria para asistir a todas las sesiones del curso y para realizar las tareas y prácticas adicionales si es necesario. Tener la inscripcion y las cuotas abonadas',
        paragraph2: '',
        image1url: 'https://i.ibb.co/FqJxYVP/zoomcrop.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al emocionante curso "Arte y Ciencia de las Velas: Creación y Uso"! En este curso, te sumergirás en el fascinante mundo de las velas, donde la creatividad y la ciencia se unen para producir hermosas obras de arte que también pueden mejorar tu calidad de vida.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/QXN8ZQY/f-elconfidencial-com-original-3c9-5cd-f94-3c95cdf9483cfa4ecac58a901e0ef252.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos para participar en este curso, ya que está diseñado tanto para principiantes como para entusiastas de las velas con experiencia. Sin embargo, te recomendamos tener acceso a una cocina con una estufa o un quemador, ya que parte del curso involucra la fabricación de velas. Además, será útil tener acceso a una variedad de aceites esenciales y fragancias para experimentar con diferentes aromas durante el curso.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/sHD5tJd/zoomcrop4.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al emocionante curso "Creación de Lencería: Elegancia y Comodidad"! En este curso, te sumergirás en el apasionante mundo de la moda íntima, donde aprenderás a diseñar y confeccionar tus propias piezas de lencería únicas y elegantes.',
        paragraph2: ' La lencería hecha a mano es una forma hermosa de combinar la artesanía y la creatividad en la moda. En nuestro Curso de Confección de Lencería Hecha a Mano, te proporcionaremos las habilidades necesarias para diseñar y coser prendas íntimas exquisitas. Desde sutiles detalles de encaje hasta tejidos cómodos y favorecedores, aprenderás a crear lencería que se adapte perfectamente y que realce la belleza natural de cada persona.',
        image1url: 'https://i.ibb.co/p4qXvXT/images4.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos en costura o diseño de moda, ya que este curso está diseñado para principiantes. Sin embargo, para sacar el máximo provecho del curso, se recomienda tener acceso a una máquina de coser y estar familiarizado con su funcionamiento básico. También, es útil tener una selección de telas, encajes y elásticos para practicar y crear tus diseños.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/SJM5wgw/Lingerie-cursus-online-600x683.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al emocionante curso ".¡Bienvenidos al emocionante curso "Arte en Nudos: Aprende el Tejido Macramé"! En este curso, te sumergirás en el apasionante mundo del tejido de macramé, donde aprenderás a crear hermosas obras de arte con cuerdas y nudos.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/dM5rx4M/zoomcrop2.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos en macramé para participar en este curso. Sin embargo, se recomienda tener acceso a un área de trabajo con espacio para estirar las cuerdas y realizar los nudos. Además, necesitarás un suministro básico de cuerdas de macramé en diferentes grosores y colores para practicar y crear tus proyectos.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/mbYqt3Q/compocrochet.png',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
       {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al emocionante curso "El Arte de la Fabricación de Jabones: Crea, Decora y Disfruta"! En este curso, te sumergirás en el fascinante mundo de la fabricación de jabones, donde la creatividad y la ciencia se encuentran para producir hermosos y aromáticos jabones artesanales.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/nn60Ph0/zoomcrop6.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos en fabricación de jabones. Sin embargo, se recomienda tener acceso a un área de trabajo bien ventilada y utilizar equipo de protección personal, como guantes y gafas de seguridad, durante la fabricación de jabones. También, es útil contar con ingredientes básicos de fabricación de jabones, como aceites, sosa cáustica, fragancias y colorantes, para realizar las prácticas del curso.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/TqJ5mvF/zoomcrop13.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al emocionante curso "El Mundo de los Slimes: Creación y Diversión"! En este curso, te sumergirás en el divertido y colorido mundo de los slimes, donde aprenderás a crear mezclas fascinantes y a experimentar con diferentes texturas y colores.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/JkwBr28/images10.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos para participar en este curso. Los materiales necesarios para crear slimes suelen ser accesibles y asequibles. Los estudiantes deberán tener acceso a ingredientes comunes como pegamento transparente, solución salina, bicarbonato de sodio y colorantes de alimentos. Se recomienda contar con un área de trabajo fácilmente limpiable y bien ventilada para la fabricación de slimes.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/jybH5GY/zoomcrop11.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al enriquecedor curso "El Arte de Crear Sahumerios: Fragancia y Espiritualidad"! En este curso, te sumergirás en el mágico mundo de la fabricación de sahumerios, donde aprenderás a crear fragancias únicas y a profundizar tu conexión espiritual.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/0fh8vWj/zoomcrop3.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos en la fabricación de sahumerios para participar en este curso. Sin embargo, se recomienda tener acceso a una variedad de aceites esenciales, hierbas secas, resinas y otros ingredientes para experimentar con diferentes fragancias. También, es útil contar con un área de trabajo bien ventilada para la fabricación y el secado de los sahumerios.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/hXrwFyy/zoomcrop12.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al inspirador curso "Diseño Sostenible y Reciclaje Creativo"! En este curso, te sumergirás en el emocionante mundo del diseño sostenible, donde aprenderás a crear objetos de valor a partir de materiales reciclados, promoviendo al mismo tiempo un futuro más sostenible.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/LpYmwwK/zoomcrop20.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos en diseño sostenible o reciclaje para participar en este curso. Sin embargo, es útil tener acceso a una variedad de materiales reciclables, como muebles viejos, telas, vidrio, metal, plástico, entre otros, para las actividades prácticas. Además, se recomienda contar con herramientas básicas de bricolaje y costura para la transformación de materiales.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/sQgF2Xv/zoomcrop21.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Presentación',
        paragraph1: '¡Bienvenidos al emocionante curso "Arte en Sublimación: Creatividad en Transferencia"! En este curso, te sumergirás en el fascinante mundo de la sublimación, donde aprenderás a transformar objetos comunes en obras de arte personalizadas y únicas.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/QD0Sv52/images22.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Requísito',
        paragraph1: 'No se requieren conocimientos previos en sublimación para participar en este curso. Sin embargo, se recomienda tener acceso a una prensa de calor y suministros básicos de sublimación, como tintas de sublimación, papel de transferencia y productos en blanco para personalizar (camisetas, tazas, etc.). Además, es útil tener acceso a un área de trabajo bien ventilada para la aplicación de calor.',
        paragraph2: '',
        image1url: 'https://i.ibb.co/87zS3p8/curso-de-sublimacion.jpg',
        image2url: 'https://i.ibb.co/sWTTSFf/345270431-766231688363871-4341753288289659002-n.jpg',
        courseId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      

     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courseDetails', null, {});
  },
};
