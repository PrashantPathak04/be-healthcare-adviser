const users = [
    {
      id: 'u1',
      username: 'prashanth.p',
      password: 'securePass123',
      name: 'Prashanth Pathak',
      age: 35,
      gender: 'Male',
      email: 'prashanth.pathak@example.com',
      currentPlanId: 'p1',
      dependents: [
        {
          id: 'd1',
          name: 'Ananya Pathak',
          age: 32,
          relationship: 'Spouse',
        },
        {
          id: 'd2',
          name: 'Aarav Pathak',
          age: 6,
          relationship: 'Child',
        },
      ],
    },
    {
      id: 'u2',
      username: 'ravi.kumar',
      password: 'raviSecure456',
      name: 'Ravi Kumar',
      age: 45,
      gender: 'Male',
      email: 'ravi.kumar@example.com',
      currentPlanId: 'p2',
      dependents: [
        {
          id: 'd3',
          name: 'Meera Kumar',
          age: 42,
          relationship: 'Spouse',
        },
      ],
    },
    {
      id: 'u3',
      username: 'neha.singh',
      password: 'nehaPass789',
      name: 'Neha Singh',
      age: 29,
      gender: 'Female',
      email: 'neha.singh@example.com',
      currentPlanId: 'p1',
      dependents: [],
    },
  ];
  
  export default users;