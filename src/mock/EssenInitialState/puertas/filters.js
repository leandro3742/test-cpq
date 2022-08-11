export const filters =
{
  'Generar puerta': {
    "Tipo": [
      {
        "value": "Multiuso",
        "dependency": []
      },
      {
        "value": "Cortafuego",
        "dependency": []
      }
    ],
    "Hojas": [
      {
        "value": "2H Batiente",
        "dependency": []
      },
      {
        "value": "1H Batiente",
        "dependency": []
      },
      {
        "value": "1H Corredera",
        "dependency": []
      }
    ],
    "Resistencia al fuego": [
      {
        "value": "El2-60 C5",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "El2-90 C5",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "El2-120 C5",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "UL 90",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "UL 120",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "UL 180",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      }
    ],
    "Medidas Hueco de obra HO* (Ancho)": [
      {
        "value": 680,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 780,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 890,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 980,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 1010,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 1080,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 1180,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 1280,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "1H Batiente",
              " 1H Corredera"
            ]
          }
        ]
      },
      {
        "value": 1225,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "2H Batiente"
            ]
          }
        ]
      },
      {
        "value": 1325,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "2H Batiente"
            ]
          }
        ]
      },
      {
        "value": 1425,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "2H Batiente"
            ]
          }
        ]
      },
      {
        "value": 1525,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "2H Batiente"
            ]
          }
        ]
      },
      {
        "value": 1625,
        "dependency": [
          {
            "key": "Hojas",
            "value": [
              "2H Batiente"
            ]
          }
        ]
      }
    ],
    "Medidas Hueco de obra HO* (Alto)": [
      {
        "value": 2050,
        "dependency": []
      },
      {
        "value": 2150,
        "dependency": []
      }
    ],
    "Apertura": [
      {
        "value": "Derecha",
        "dependency": []
      },
      {
        "value": "Izquierda",
        "dependency": []
      },
      {
        "value": "Doble sentido",
        "dependency": []
      }
    ]
  },
  'Accesorios': {
    "Mirillas": [
      {
        "value": "Cortafuego E60 pintada 225 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 pintada 300 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 pintada 300 x 400 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 pintada  400 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 pintada  600 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 pintada 200 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 pintada 120 x 750 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 inoxidable 225 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E60 inoxidable 300 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-60 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada 225 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada  300 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada 300 x 400 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada  400 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada  600 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada 200 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 pintada 120 x 750 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 inoxidable 225 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Cortafuego E90 inoxidable 300 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "El2-90 C5"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 225 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 300 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 300 x 400 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 400 x 600 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 600 x 600 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 200 x 600 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas pintada 120 x 750 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas inoxidable 225 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Parallamas inoxidable 300 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "UL pintada 200 x 600 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "UL 90",
              "UL 120",
              "UL180"
            ]
          }
        ]
      },
      {
        "value": "UL pintada 300 x 300 mm",
        "dependency": [
          {
            "key": "Resistencia al fuego",
            "value": [
              "UL 90",
              "UL 120",
              "UL180"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 225 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 300 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 300 x 400 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 400 x 600 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 600 x 600 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 200 x 600 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso pintada 120 x 750 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso inoxidable 225 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      },
      {
        "value": "Multiuso inoxidable 300 mm",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Multiuso"
            ]
          }
        ]
      }
    ],
    "Barras antipánico": [
      {
        "value": "Tipo universal de embutir (estándar – 1 hoja)",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "Tipo universal de embutir (estándar – 2 hojas)",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "Sobreponer (estándar - 1 hoja)",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      },
      {
        "value": "Sobreponer (estándar - 2 hojas)",
        "dependency": [
          {
            "key": "Tipo",
            "value": [
              "Cortafuego"
            ]
          }
        ]
      }
    ],
    "Dispositivos electromagnéticos": [
      {
        "value": "Electroimán de pared",
        "dependency": []
      },
      {
        "value": "Electroimán de suelo ",
        "dependency": []
      },
      {
        "value": "Electroimán con soporte especial de instalación",
        "dependency": []
      }
    ],
    "Selector de cierre": [
      {
        "value": "Selector de cierre",
        "dependency": []
      }
    ],
    "Cerraduras cortafuego": [
      {
        "value": "Cerradura panic CF60 – Zinc",
        "dependency": []
      },
      {
        "value": "Cerradura cuadradillo partido",
        "dependency": []
      },
      {
        "value": "Pasacables de embutir",
        "dependency": []
      },
      {
        "value": "Pasacable visto",
        "dependency": []
      }
    ],
    "Cilindros": [
      {
        "value": "Cilindro estándar ",
        "dependency": []
      }
    ],
    "Cierrapuertas": [
      {
        "value": "Cierrapuertas CT 1800",
        "dependency": []
      },
      {
        "value": "DC 140",
        "dependency": []
      }
    ],
    "Manillas": [
      {
        "value": "Juego de manilla INOX económica",
        "dependency": []
      }
    ]
  },
}
