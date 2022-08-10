export const statePuertas = {
    "Generar puerta": {
        type: "object",
        values: {
            filtro1: {
                type: "filter",
                key: "filtro1",
            },
            filtro2: {
                type: "filter",
                key: "filtro2",
            },
            filtro3: {
                type: "filter",
                key: "filtro3",
            },
            "Tamaño hojas": {
                type: "object",
                question: "Tamaño hojas",
                key: "Tamaño hojas",
                enabled: true,
                values: {
                    filtro4: {
                        type: "filter",
                        key: "filtro4",
                    },
                    filtro5: {
                        type: "filter",
                        key: "filtro5",
                    },
                    filtro6: {
                        type: "filter",
                        key: "filtro6",
                    },
                },
            },
            // filtro7: {
            //     type: "filter",
            //     key: "filtro7",
            // },
            filtro8: {
                type: "filter",
                key: "filtro8",
            },
        },
    },
    Accesorios: {
        type: "object",
        values: {
            Mirillas: {
                type: "object",
                question: "Mirillas",
                key: "Mirillas",
                enabled: true,
                values: {
                    filtro9: {
                        type: "filter",
                        key: "filtro9",
                    },
                    filtro10: {
                        type: "filtro10",
                        key: "filtro10",
                    },
                    filtro30: {
                        type: "filtro30",
                        key: "filtro30",
                    },
                    filtro11: {
                        type: "filter",
                        key: "filtro11",
                    },
                    filtro12: {
                        key: "filtro12",
                    },
                    filtro13: {
                        type: "filter",
                        key: "filtro13",
                    },
                    filtro14: {
                        type: "filter",
                        key: "filtro14",
                    },
                },

                filtro13: {
                    type: "filter",
                    key: "filtro13",
                },
                filtro14: {
                    type: "filter",
                    key: "filtro14",
                },
            },
            "Barras antipánico": {
                type: "object",
                question: "Barras antipánico",
                key: "Barras antipánico",
                enabled: true,
                // dependency: [
                //     { key: "filtro1", value: ["Cortafuego"] },
                //     { key: "filtro3", value: ["Ul 90", "UL 120", "UL 180"] },
                //     { key: "filtro9", value: ["200 x 600 mm", "300 x 300 mm"] },
                // ],
                values: {
                    filtro15: {
                        type: "filter",
                        key: "filtro15",
                    },
                    filtro16: {
                        type: "filter",
                        key: "filtro16",
                    },
                    filtro17: {
                        type: "filter",
                        key: "filtro17",
                    },
                },
            },
            "Dispositivos electromagnéticos": {
                type: "object",
                question: "Dispositivos electromagnéticos",
                key: "Dispositivos electromagnéticos",
                enabled: true,
                values: {
                    filtro18: {
                        type: "filter",
                        key: "filtro18",
                    },
                    filtro19: {
                        type: "filter",
                        key: "filtro19",
                    },
                },
            },
            "Selector de cierre": {
                type: "object",
                question: "Selector de cierre",
                key: "Selector de cierre",
                enabled: true,
                values: {
                    filtro20: {
                        type: "filter",
                        key: "filtro20",
                    },
                },
            },
            "Cerraduras cortafuego": {
                type: "object",
                question: "Cerraduras cortafuego",
                key: "Cerraduras cortafuego",
                enabled: true,
                values: {
                    filtro21: {
                        type: "filter",
                        key: "filtro21",
                    },
                    filtro22: {
                        type: "filter",
                        key: "filtro22",
                    },
                    filtro23: {
                        type: "filter",
                        key: "filtro23",
                    },
                },
            },
            Cilindros: {
                type: "object",
                question: "Cilindros",
                key: "Cilindros",
                enabled: true,
                values: {
                    filtro24: {
                        type: "filter",
                        key: "filtro24",
                    },
                    filtro25: {
                        type: "filter",
                        key: "filtro25",
                    },
                },
            },
            Cierrapuertas: {
                type: "object",
                question: "Cierrapuertas",
                key: "Cierrapuertas",
                enabled: true,
                values: {
                    filtro26: {
                        type: "filter",
                        key: "filtro26",
                    },
                    filtro27: {
                        type: "filter",
                        key: "filtro27",
                    },
                },
            },
            Manillas: {
                type: "object",
                question: "Manillas",
                key: "Manillas",
                enabled: true,
                values: {
                    filtro28: {
                        type: "filter",
                        key: "filtro28",
                    },
                    filtro29: {
                        type: "filter",
                        key: "filtro29",
                    },
                },
            },
        },
    },
};
