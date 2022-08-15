exports.seed = async function (knex) {
  await knex('challenges').del()
  await knex('challenges').insert([
    {
      id: 1,
      title: 'Meat-Free Monday',
      description: 'Go without meat for a Monday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 2,
      title: 'No Cheese Tuesday',
      description: 'Go without cheese for a Tuesday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 3,
      title: 'Placeholder Wednesday',
      description: 'lorem ipsum wednesday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 4,
      title: 'Placeholder Thursday',
      description: 'lorem ipsum thursday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 5,
      title: 'Fish Buddy Friday',
      description: 'Go without seafood for a Friday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 6,
      title: 'Placeholder Saturday',
      description: 'lorem ipsum saturday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 7,
      title: 'Placeholder Sunday',
      description: 'lorem ipsum sunday',
      icon: './icons/diet.png',
      points_rewarded: 5,
      points_required: 0,
    },
    {
      id: 8,
      title: 'Carpool Campaign',
      description: 'Share your route with at least one person',
      icon: './icons/transport.png',
      points_rewarded: 10,
      points_required: 35,
    },
    {
      id: 9,
      title: 'Bus Brigade',
      description: 'Leave your car alone and take the bus',
      icon: './icons/transport.png',
      points_rewarded: 10,
      points_required: 35,
    },
    {
      id: 10,
      title: 'Bike Battle',
      description: 'Bike to your destination',
      icon: './icons/transport.png',
      points_rewarded: 10,
      points_required: 35,
    },
    {
      id: 11,
      title: 'Walking Wonder',
      description: 'Walk to your destination',
      icon: './icons/transport.png',
      points_rewarded: 10,
      points_required: 35,
    },
    {
      id: 12,
      title: 'Reusable Rally',
      description: 'Use reusable packaging for your takeaways',
      icon: './icons/sustainable.png',
      points_rewarded: 15,
      points_required: 75,
    },
    {
      id: 13,
      title: 'Refill Race',
      description: 'Go to refill shops for your pantry essentials',
      icon: './icons/sustainable.png',
      points_rewarded: 15,
      points_required: 75
    },
    {
      id: 14,
      title: 'Repair Routine',
      description: 'Fix your broken items instead of buying new',
      icon: './icons/sustainable.png',
      points_rewarded: 15,
      points_required: 75
    },
    {
      id: 15,
      title: 'Op-Shoppathon',
      description: 'Fulfill your shopping urge at op-shops',
      icon: './icons/sustainable.png',
      points_rewarded: 15,
      points_required: 75
    },
    {
      id: 16,
      title: 'Ocean Operation',
      description: 'Volunteer for a beach cleanup day',
      icon: './icons/volunteer.png',
      points_rewarded: 20,
      points_required: 135
    },
    {
      id: 17,
      title: 'Soil Salvation',
      description: 'Create your own compost or share your food scraps',
      icon: './icons/volunteer.png',
      points_rewarded: 20,
      points_required: 135
    },
    {
      id: 18,
      title: 'Tree Planting Tournament',
      description: 'Volunteer for a tree planting day',
      icon: './icons/volunteer.png',
      points_rewarded: 20,
      points_required: 135
    }
  ])
}
