export const initialStateEssen = {
    soft: {
        listRuedaSola: { key: "Rueda sola", children: [], father: "", enabled: true },
        listRuedaArmada: { key: "Rueda armada", children: [], father: "", enabled: true },
        listBaseSola: { key: "Base sola", children: [], father: "", enabled: true },
    },
    cart: [],
    filtersGroup: {
        Soporte: {
            Galvanizado: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Banda de rodadura/neumático",
                        operation: "equals",
                        advancedFilter: true,
                        value: "Poliuretano",
                    },
                ],
            },
            Inoxidable: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Banda de rodadura/neumático",
                        operation: "equals",
                        advancedFilter: true,
                        value: "Poliuretano",
                    },
                ],
            },
            Pintado: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Banda de rodadura/neumático",
                        operation: "equals",
                        advancedFilter: true,
                        value: "Poliuretano",
                    },
                ],
            },
        },
        "Tipo de uso": {
            Hospitalario: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Banda de rodadura/neumático",
                        operation: "equals",
                        advancedFilter: true,
                        value: "Poliuretano",
                    },
                ],
            },
            Frigorifico: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            Decoración: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            Logística: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            "Industria alimenticia": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            "Industria química": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            Energía: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            Construcción: {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
            "Industria pesada": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Capacidad de carga (kg)",
                        operation: "less",
                        advancedFilter: true,
                        value: 200,
                    },
                ],
            },
        },

        Diametro: {
            "Menos de 50mm": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Ø Rueda (mm)",
                        advancedFilter: true,
                        value: 50,
                        operation: "less",
                    },
                ],
            },
            "Entre 51mm y 100mm": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Ø Rueda (mm)",
                        advancedFilter: true,
                        value: 50,
                        operation: "greater",
                    },
                    {
                        feature: "Rueda sola",
                        property: "Ø Rueda (mm)",
                        advancedFilter: true,
                        value: 100,
                        operation: "less",
                    },
                ],
            },
            "Entre 101mm y 200mm": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Ø Rueda (mm)",
                        advancedFilter: true,
                        value: 100,
                        operation: "greater",
                    },
                    {
                        feature: "Rueda sola",
                        property: "Ø Rueda (mm)",
                        advancedFilter: true,
                        value: 200,
                        operation: "less",
                    },
                ],
            },
            "Mas de 200mm": {
                active: false,
                filters: [
                    {
                        feature: "Rueda sola",
                        property: "Ø Rueda (mm)",
                        advancedFilter: true,
                        value: 200,
                        operation: "greater",
                    },
                ],
            },
        },
    },
    steps: ["Seleccionar Rueda / Base", "Carrito de compras", "Compare"],
};

// { name: "Seleccionar Rueda / Base", components: `<></>` }
