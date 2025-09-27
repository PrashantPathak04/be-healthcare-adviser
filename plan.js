const plans = [
      {
        id: "p1",
        name: "Health Shield Gold Plan",
        type: "HMO",
        status: "Active",
        effectiveDate: "2025-01-01",
        coverageEndDate: "2025-12-31",
        summary:
          "Our premier plan offering comprehensive coverage for all healthcare needs. Includes low deductibles and a broad network of providers.",
        coverageDetails: {
          network: "Large PPO Network",
          inNetworkCoverage: "90% of all eligible claims after deductible",
          outOfNetworkCoverage: "60% of all eligible claims after deductible",
        },
        costDetails: {
          monthlyPremium: 500,
          annualDeductible: 1000,
          outOfPocketMaximum: 6000,
          copayments: {
            primaryCareVisit: 20,
            specialistVisit: 50,
            emergencyRoom: 150,
          },
        },
        benefits: [
          {
            name: "Preventive Care",
            description:
              "Annual check-ups, flu shots, and screenings covered at 100% in-network.",
            coverage: "100%",
            inNetwork: true,
          },
          {
            name: "Prescription Drugs",
            description:
              "Tiered co-pay structure for generic, preferred, and non-preferred drugs.",
            coverage: "Varies by tier",
            tiers: {
              generic: 10,
              preferred: 30,
              nonPreferred: 60,
            },
          },
          {
            name: "Emergency Services",
            description: "Covers emergency room visits and ambulance services.",
            coverage: "90% after copay",
            copay: 150,
          },
        ],
      },
      {
        id: "p2",
        name: "Silver Standard Plan",
        type: "PPO",
        status: "Active",
        effectiveDate: "2025-01-01",
        coverageEndDate: "2025-12-31",
        summary:
          "A balanced plan providing solid coverage at an affordable price. Offers more flexibility in choosing providers.",
        coverageDetails: {
          network: "Medium PPO Network",
          inNetworkCoverage: "80% of all eligible claims after deductible",
          outOfNetworkCoverage: "50% of all eligible claims after deductible",
        },
        costDetails: {
          monthlyPremium: 350,
          annualDeductible: 2500,
          outOfPocketMaximum: 8000,
          copayments: {
            primaryCareVisit: 30,
            specialistVisit: 70,
            emergencyRoom: 250,
          },
        },
        benefits: [
          {
            name: "Preventive Care",
            description:
              "Annual check-ups, flu shots, and screenings covered at 100% in-network.",
            coverage: "100%",
            inNetwork: true,
          },
          {
            name: "Prescription Drugs",
            description:
              "Higher tiered co-pay structure for generic, preferred, and non-preferred drugs.",
            coverage: "Varies by tier",
            tiers: {
              generic: 15,
              preferred: 40,
              nonPreferred: 80,
            },
          },
          {
            name: "Mental Health",
            description:
              "Covers outpatient mental health services and therapy.",
            coverage: "80% after copay",
            copay: 30,
          },
        ],
      },
      {
        id: "p3",
        name: "Bronze Basic Plan",
        type: "HMO",
        status: "Active",
        effectiveDate: "2025-01-01",
        coverageEndDate: "2025-12-31",
        summary:
          "Our most affordable plan with lower monthly premiums. Best for healthy individuals who don't expect frequent doctor visits.",
        coverageDetails: {
          network: "Local HMO Network",
          inNetworkCoverage: "70% of all eligible claims after deductible",
          outOfNetworkCoverage: "0%",
        },
        costDetails: {
          monthlyPremium: 200,
          annualDeductible: 5000,
          outOfPocketMaximum: 10000,
          copayments: {
            primaryCareVisit: 40,
            specialistVisit: 90,
            emergencyRoom: 500,
          },
        },
        benefits: [
          {
            name: "Preventive Care",
            description:
              "Annual check-ups, flu shots, and screenings covered at 100% in-network.",
            coverage: "100%",
            inNetwork: true,
          },
          {
            name: "Emergency Services",
            description: "Covers emergency room visits within the network.",
            coverage: "70% after copay",
            copay: 500,
          },
        ],
      },
    ];

export default plans;