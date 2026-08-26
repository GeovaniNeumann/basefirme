import { useState } from 'react'
import styles from './Gallery.module.css'

const services = [
  {
    id: 1,
    title: 'Galpões Industriais',
    description: 'Estruturas robustas e planejadas para indústrias de médio e grande porte, com vãos livres e pé-direito elevado.',
    category: 'Industrial',
    image: '/3.webp', // Caminho direto para a pasta public
    features: ['Vãos livres até 30m', 'Pé-direito personalizado', 'Estrutura 100% pré-moldada']
  },
  {
    id: 2,
    title: 'Centros de Distribuição',
    description: 'Soluções logísticas com grande área de armazenagem, docas e fluxo otimizado para operações eficientes.',
    category: 'Logística',
    image: '/galpao.webp',
    features: ['Área ampla e modular', 'Estrutura para empilhadeiras', 'Piso de alta resistência']
  },
  {
    id: 3,
    title: 'Armazéns Agrícolas',
    description: 'Estruturas projetadas para armazenamento de grãos, fertilizantes e insumos com proteção contra intempéries.',
    category: 'Agrícola',
    image: '/1.webp',
    features: ['Ventilação natural', 'Proteção contra umidade', 'Estrutura durável']
  },
  {
    id: 4,
    title: 'Galpões Comerciais',
    description: 'Espaços versáteis para comércios, showrooms e lojas, com fachada moderna e acabamento personalizado.',
    category: 'Comercial',
    image: '/barracao.webp',
    features: ['Fachada personalizável', 'Acabamento premium', 'Iluminação natural']
  },
  {
   id: 5,
   title: 'Estruturas Pré-Moldados de Concreto',
   description: 'Estruturas 100% em concreto pré-moldado, projetadas para alta durabilidade, resistência e baixa manutenção.',
   category: 'Industrial',
   image: '/estrutura.webp',
   features: ['Alta durabilidade', 'Baixa manutenção', 'Resistência ao fogo', 'Vida útil prolongada']
  } ,
  {
    id: 6,
    title: 'Fundações In Loco',
    description: 'Execução de fundações moldadas in loco com controle técnico rigoroso, garantindo estabilidade e segurança para qualquer porte de obra.',
    category: 'Fundações',
    video: '/video.mp4',
    features: ['Controle técnico em obra', 'Concreto usinado de alta resistência', 'Base sólida para qualquer estrutura']
  },
]

const categories = ['Todos', 'Industrial', 'Logística', 'Comercial', 'Agrícola', 'Fundações']

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'Todos' ? services : services.filter(s => s.category === active)

  return (
    <section id="servicos" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que fazemos</span>
          <h2 className={styles.title}>
            Nossas<br /><em>Soluções</em>
          </h2>
          <p className={styles.sub}>
            Oferecemos estruturas de concreto pré-moldado sob medida para as necessidades do seu negócio.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map(c => (
            <button
              key={c}
              className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(service => (
            <div
              key={service.id}
              className={styles.item}
              onClick={() => setSelected(service)}
            >
              {/* Imagem ou vídeo de fundo */}
              <div className={styles.itemImage}>
                {service.video ? (
                  <video src={service.video} autoPlay loop muted playsInline />
                ) : (
                  <img src={service.image} alt={service.title} />
                )}
              </div>
              <div className={styles.itemOverlay} />
              <div className={styles.itemContent}>
                <span className={styles.itemCat}>{service.category}</span>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemDesc}>{service.description}</p>
              </div>
              <div className={styles.itemHover}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Tem um projeto em mente?</p>
          <a
            href={`https://wa.me/5541998060564?text=Olá! Gostaria de saber mais sobre as soluções da Base Firme.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Fale com um especialista
          </a>
        </div>
      </div>

      {/* Modal com detalhes do serviço */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.modalImg}>
              {selected.video ? (
                <video src={selected.video} autoPlay loop muted playsInline controls />
              ) : (
                <img src={selected.image} alt={selected.title} />
              )}
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalCat}>{selected.category}</span>
              <h3 className={styles.modalTitle}>{selected.title}</h3>
              <p className={styles.modalDesc}>{selected.description}</p>
              
              <div className={styles.modalFeatures}>
                <h4>Diferenciais:</h4>
                <ul>
                  {selected.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={`https://wa.me/5541998060564?text=Olá! Me interessei pelo serviço "${selected.title}" e quero um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalBtn}
              >
                Solicitar Orçamento
              </a>
            </div>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}