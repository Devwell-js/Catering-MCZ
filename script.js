(() => {
  const deck = window.CATERING_MCZ_DECK;
  if (!deck || !Array.isArray(deck.slides) || deck.slides.length !== 16) {
    throw new Error("Não foi possível carregar todos os slides do material Catering MCZ atualizado.");
  }

  const slides = deck.slides;
  const editStorageKey = "catering-mcz-landing-edits-v1";
  const menuData = {
    proteins: {
      entries: [
        ["Prato de carne e acompanhamentos", "Uma combinação de carnes com arroz, legumes e guarnições."],
        ["Prato quente com frango", "Uma refeição completa com frango preparado e acompanhamentos."],
        ["Peixe com guarnição", "Uma opção de refeição com peixe, legumes e acompanhamentos."]
      ]
    },
    seafood: {
      entries: [
        ["Peixe preparado na grelha", "Uma apresentação de pescado com acompanhamentos."],
        ["Peixe e acompanhamentos", "Opções de peixe e guarnições em uma composição de prato."],
        ["Pescado com acompanhamentos", "Uma refeição com peixe servido com vegetais e outros acompanhamentos."]
      ]
    },
    sides: {
      entries: [
        ["Arroz e vegetais", "Composição com arroz, vegetais e guarnições."],
        ["Seleção de acompanhamentos", "Uma bandeja com diferentes pratos e preparações."],
        ["Arroz e guarnição", "Prato com arroz e outros acompanhamentos."]
      ]
    },
    desserts: {
      entries: [
        ["Sobremesa cremosa", "Uma apresentação de sobremesa em porção individual."],
        ["Sobremesa com calda", "Doce servido em recipiente individual com cobertura."],
        ["Sobremesa de frutas", "Uma sobremesa cremosa com uma combinação de frutas."]
      ]
    }
  };
  const customFoodItems = [
    {
      id: "ravioli-ao-sugo",
      slide: 9,
      filter: "massas",
      category: "Massas",
      title: "Ravioli ao molho de tomate",
      description: "Ravioli servido com molho de tomate e ervas frescas.",
      image: "assets/food-new/ravioli-ao-sugo.jpg",
      facts: ["Massa recheada", "Molho de tomate", "Ervas frescas"],
      details: ["Ravioli em porção individual, coberto com molho de tomate e finalizado com ervas."]
    },
    {
      id: "peixe-com-arroz-e-pure",
      slide: 8,
      filter: "frutos-do-mar",
      category: "Frutos do mar",
      title: "Filé de peixe com arroz e purê",
      description: "Filé de peixe grelhado, acompanhado de arroz e purê.",
      image: "assets/food-new/peixe-com-arroz-e-pure.jpg",
      facts: ["Peixe", "Arroz", "Purê"],
      details: ["Refeição individual com filé de peixe grelhado, arroz e purê."]
    },
    {
      id: "preparacao-cremosa-com-ervas",
      slide: 9,
      filter: "acompanhamentos",
      category: "Acompanhamentos",
      title: "Preparação cremosa com ervas",
      description: "Acompanhamento de textura cremosa, finalizado com ervas frescas.",
      image: "assets/food-new/preparacao-ao-molho-branco.jpg",
      facts: ["Acompanhamento", "Molho cremoso", "Ervas frescas"],
      details: ["Uma preparação cremosa servida em porção individual e finalizada com ervas."]
    },
    {
      id: "carne-desfiada-com-abobora",
      slide: 7,
      filter: "proteinas",
      category: "Proteínas",
      title: "Carne desfiada com abóbora",
      description: "Carne desfiada servida com cubos de abóbora e ervas.",
      image: "assets/food-new/carne-desfiada-com-abobora.jpg",
      facts: ["Carne desfiada", "Abóbora", "Ervas"],
      details: ["Carne desfiada acompanhada de cubos de abóbora e ervas frescas."]
    },
    {
      id: "salada-de-camarao-e-vegetais",
      slide: 8,
      filter: "saladas",
      category: "Saladas",
      title: "Salada de camarão e vegetais",
      description: "Camarões com folhas, lentilhas, vegetais e cubos de abóbora.",
      image: "assets/food-new/salada-de-camarao-e-lentilhas.jpg",
      facts: ["Camarão", "Folhas", "Vegetais"],
      details: ["Salada composta por camarões, folhas, lentilhas, vegetais e cubos de abóbora."]
    },
    {
      id: "salada-com-ovos-e-proteina",
      slide: 7,
      filter: "saladas",
      category: "Saladas",
      title: "Salada completa com ovos e proteína de frango",
      description: "Folhas, legumes coloridos, ovos cozidos e frango.",
      image: "assets/food-new/salada-de-frango-com-ovos.jpg",
      facts: ["Folhas e legumes", "Ovos", "Frango"],
      details: ["Uma composição de folhas, legumes variados, ovos cozidos e frango."]
    }
  ];
  const imageDescriptions = [
    { slide: 1, images: ["Prato de carne com arroz, legumes e salada.", "Bandeja de refeição com diferentes pratos para o serviço de bordo."] },
    { slide: 2, images: ["Veículo de apoio transportando uma aeronave no aeroporto.", "Veículo utilizado na operação de handling.", "Veículos de catering junto à operação aérea."] },
    { slide: 4, images: ["Refeições prontas para diferentes configurações de serviço.", "Bandeja com opções variadas para o serviço de bordo."] },
    { slide: 6, images: ["Refeição individual pronta para o serviço de delivery.", "Refeição completa servida em embalagem individual."] },
    { slide: 7, images: menuData.proteins.entries.map(entry => entry[0]) },
    { slide: 8, images: menuData.seafood.entries.map(entry => entry[0]) },
    { slide: 9, images: menuData.sides.entries.map(entry => entry[0]) },
    { slide: 10, images: menuData.desserts.entries.map(entry => entry[0]) },
    { slide: 13, images: ["Sugestões de refeições para a bandeja Premium."] },
    { slide: 14, images: ["Café da manhã com frutas, sanduíche, bebida e outras opções."] }
  ];

  const elements = {
    navigation: document.querySelector("#primary-navigation"),
    menuToggle: document.querySelector("#menu-toggle"),
    searchToggle: document.querySelector("#search-toggle"),
    searchPanel: document.querySelector("#search-panel"),
    searchInput: document.querySelector("#search-input"),
    searchResults: document.querySelector("#search-results"),
    detail: document.querySelector("#detail-dialog"),
    detailTopic: document.querySelector("#detail-topic"),
    detailPage: document.querySelector("#detail-page"),
    detailTitle: document.querySelector("#detail-title"),
    detailSummary: document.querySelector("#detail-summary"),
    detailFacts: document.querySelector("#detail-facts"),
    detailText: document.querySelector("#detail-text"),
    detailImageFrame: document.querySelector("#detail-image-frame"),
    detailGallery: document.querySelector("#detail-gallery"),
    detailNoImage: document.querySelector("#detail-no-image"),
    downloadImage: document.querySelector("#download-image"),
    imageIndex: document.querySelector("#image-index"),
    imagePrevious: document.querySelector("#image-previous"),
    imageNext: document.querySelector("#image-next"),
    zoomImage: document.querySelector("#zoom-image"),
    toast: document.querySelector("#toast"),
    live: document.querySelector("#live-status"),
    editBar: document.querySelector("#edit-bar"),
    mealImage: document.querySelector("#meal-image-content"),
    mealImageTrigger: document.querySelector("#meal-image"),
    mealDetails: document.querySelector("#meal-details"),
    mealLevel: document.querySelector("#meal-level"),
    mealTitle: document.querySelector("#meal-title"),
    mealDescription: document.querySelector("#meal-description"),
    mealComponents: document.querySelector("#meal-components")
  };

  let activeImageIndex = 0;
  let activeSlideIndex = 0;
  let activeCustomFoodId = null;
  let editing = false;
  let savedEdits = readEdits();
  let toastTimer;
  let sliderIndex = 0;
  let sliderDragging = null;
  let economyMode = false;

  function getSlide(index) {
    if (!Number.isInteger(index) || index < 0 || index >= slides.length) {
      throw new RangeError(`Número de slide fora do intervalo permitido: ${index}.`);
    }
    return slides[index];
  }

  function normalize(value) {
    return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
  }

  function getImages(index) {
    const slide = getSlide(index);
    const descriptions = imageDescriptions.find(item => item.slide === index)?.images || [];
    const images = slide.images.map((image, imageIndex) => ({
      ...image,
      alt: descriptions[imageIndex] || `${slide.title}: imagem ${imageIndex + 1} da apresentação.`
    }));
    if (index === 6) {
      images.push(
        {
          src: "assets/delivery/delivery-mcz-refeicao-individual.jpeg",
          name: "delivery-mcz-refeicao-individual.jpeg",
          alt: "Cliente segurando uma refeição individual com frango, arroz, purê e salada."
        },
        {
          src: "assets/delivery/delivery-mcz-opcoes-de-refeicoes.jpeg",
          name: "delivery-mcz-opcoes-de-refeicoes.jpeg",
          alt: "Duas refeições completas para delivery com bebidas e acompanhamentos."
        }
      );
    }
    return images;
  }

  function contentFor(index) {
    switch (index) {
      case 0:
        return [
          "O material atualizado apresenta as soluções da Catering MCZ para companhias aéreas, tripulações e passageiros.",
          "A apresentação contempla refeições e catering, handling e lavanderia."
        ];
      case 1:
        return getSlide(index).content.filter(text => text !== "Quem somos:");
      case 2:
        return getSlide(index).content.filter(text => text !== "Serviço de" && text !== "Handling");
      case 3: {
        const paragraphs = getSlide(index).content.filter(text => text !== "Lavanderia");
        const continuationIndex = paragraphs.findIndex(text => text.startsWith("e a durabilidade dos materiais."));
        if (continuationIndex > 0) {
          paragraphs[continuationIndex - 1] = `${paragraphs[continuationIndex - 1]} ${paragraphs[continuationIndex]}`;
          paragraphs.splice(continuationIndex, 1);
        }
        return paragraphs;
      }
      case 4:
        return [
          "Catering para tripulação e passageiros das classes Premium e Economy.",
          "Opções completas de refeições quentes com proteína ou vegetarianas, além de café da manhã, sanduíches e snacks, de acordo com os perfis de serviço e as necessidades operacionais.",
          "Os menus e as configurações das bandejas são personalizáveis para acompanhar a identidade e os padrões da companhia aérea. A seleção pode incluir diferentes proteínas, massas, frutas e sobremesas."
        ];
      case 5:
        return [
          "O material informa uma parceria de três anos com a Sala VIP.",
          "A MCZ fornece diferentes opções de proteínas, sobremesas, guarnições e outros preparos gastronômicos, priorizando a qualidade, a diversidade e a apresentação dos alimentos de acordo com as necessidades do cliente."
        ];
      case 6:
        return [
          "Serviço de delivery para empresas e clientes localizados nas proximidades da unidade da MCZ.",
          "Refeições individuais (quentinhas) com cardápios variados, ingredientes selecionados e preparações que valorizam a qualidade, o sabor e a apresentação.",
          "O serviço busca oferecer praticidade, pontualidade e refeições completas entregues diretamente aos clientes."
        ];
      case 7:
        return ["Seleção de proteínas que inclui filé mignon, alcatra, filé de frango e carne de sol."];
      case 8:
        return ["Opções de frutos do mar e pescados: camarão, salmão, filé de tilápia e filé de merluza."];
      case 9:
        return ["Diferentes preparações de arroz, massas, farofas e legumes. As combinações buscam variedade, equilíbrio e versatilidade no cardápio."];
      case 10:
        return ["Opções de sobremesas tradicionais e elaboradas, preparadas com atenção à qualidade dos ingredientes, ao sabor e à apresentação."];
      case 11:
        return [
          "Itens de bordo selecionados e personalizados para contribuir com a padronização do serviço, a eficiência operacional e a experiência dos passageiros.",
          "As possibilidades incluem guardanapos, copos, talheres descartáveis, kits de bordo e de higiene pessoal, açúcar, adoçante, sal, pimenta, utensílios para bebidas quentes e frias, bandejas e outros itens de apoio à cabine."
        ];
      case 12:
        return [
          "A apresentação introduz as refeições e os tipos de serviço oferecidos pela Catering MCZ.",
          "Explore os exemplos de café da manhã e refeição quente para conhecer itens, possibilidades e configurações."
        ];
      case 13:
        return [
          "Composição Premium de uma refeição quente: pão em flow pack, manteiga individual, sachês de azeite e sal, entrada fria e sobremesa.",
          "A seleção de pratos pode incluir opções com proteína — carne, frango, porco ou peixe — acompanhada por arroz, batata ou purê e vegetais.",
          "O prato quente vegetariano pode incluir lasanha, penne, fusilli, nhoque ou canelone, acompanhado de molho."
        ];
      case 14:
        return [
          "Composição Premium de café da manhã: pão em flow pack, manteiga individual, frutas da estação em cubos, bolo e aperitivo — como prato de frios com proteína.",
          "A bandeja também prevê opções de prato quente com proteína ou vegetarianas. Os exemplos do material incluem fritada, omelete e quiche."
        ];
      case 15:
        return [
          "Itens de bordo selecionados e personalizados para acompanhar a identidade e as expectativas da companhia aérea.",
          "Entre as opções estão guardanapos, copos e talheres descartáveis; kits de serviço de bordo e higiene pessoal; condimentos; utensílios para bebidas quentes e frias; bandejas e itens de apoio ao serviço de cabine."
        ];
      default:
        return [...getSlide(index).content];
    }
  }

  function displayTitle(slide, slideIndex) {
    return savedEdits[slide.id]?.title || slide.title;
  }

  function displaySummary(slide) {
    return savedEdits[slide.id]?.summary || slide.summary;
  }

  function setEditable(node, key, slideIndex) {
    node.dataset.editable = key;
    if (Number.isInteger(slideIndex)) {
      node.dataset.slideId = getSlide(slideIndex).id;
      node.dataset.slideIndex = String(slideIndex);
    }
    node.contentEditable = String(editing);
    node.spellcheck = editing;
    if (!editing) {
      const saved = Number.isInteger(slideIndex)
        ? savedEdits[getSlide(slideIndex).id]?.[key]
        : savedEdits.__page?.[key];
      if (typeof saved === "string") node.textContent = saved;
      node.dataset.editsLoaded = "true";
    }
    return node;
  }

  function imageButton(slideIndex, imageIndex, alt, source) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo-button";
    button.dataset.detailSlide = String(slideIndex);
    button.dataset.detailImage = String(imageIndex);
    button.setAttribute("aria-label", `Abrir informações de ${alt}`);

    const image = document.createElement("img");
    image.src = source;
    image.alt = alt;
    image.loading = "lazy";
    image.decoding = "async";
    button.append(image);
    return button;
  }

  function renderFeaturedSlider() {
    const items = [
      { slide: 1, image: 1, section: "Conheça a MCZ", title: "Refeições para diferentes experiências" },
      { slide: 2, image: 2, section: "Operação de solo", title: "Cuidado que acompanha cada etapa" },
      { slide: 7, image: 0, section: "Menu gastronômico", title: "Sabores e combinações variados" },
      { slide: 14, image: 0, section: "Serviço de bordo", title: "Comece a viagem com um bom café" }
    ];
    const track = document.querySelector("#featured-track");
    const fragment = document.createDocumentFragment();

    for (const item of items) {
      const slide = getSlide(item.slide);
      const image = getImages(item.slide)[item.image];
      if (!image) throw new Error(`Não foi possível carregar a imagem em destaque da seção "${item.title}".`);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "featured-card";
      card.dataset.detailSlide = String(item.slide);
      card.dataset.detailImage = String(item.image);
      card.setAttribute("aria-label", `Abrir detalhes: ${item.title}`);

      const visual = document.createElement("span");
      visual.className = "featured-image";
      const photo = document.createElement("img");
      photo.src = image.src;
      photo.alt = image.alt;
      photo.loading = "lazy";
      photo.decoding = "async";
      visual.append(photo);
      const arrow = document.createElement("span");
      arrow.textContent = "↗";
      visual.append(arrow);

      const caption = document.createElement("span");
      caption.className = "featured-caption";
      const title = document.createElement("span");
      const section = document.createElement("small");
      section.textContent = item.section;
      const heading = document.createElement("strong");
      heading.textContent = item.title;
      title.append(section, heading);
      caption.append(title);
      const number = document.createElement("span");
      number.textContent = String(slide.number).padStart(2, "0");
      caption.append(number);
      card.append(visual, caption);
      fragment.append(card);
    }
    track.replaceChildren(fragment);
    updateSliderControls();
  }

  function updateSliderControls() {
    const viewport = document.querySelector(".featured-viewport");
    const track = document.querySelector("#featured-track");
    const cards = [...track.children];
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : viewport.clientWidth;
    const maximum = Math.max(0, track.scrollWidth - viewport.clientWidth);
    const pages = Math.max(1, Math.ceil(maximum / Math.max(1, step)) + 1);
    sliderIndex = Math.min(sliderIndex, pages - 1);
    track.style.transform = `translateX(-${Math.min(sliderIndex * step, maximum)}px)`;

    const dots = document.querySelector("#featured-dots");
    dots.replaceChildren();
    for (let index = 0; index < pages; index++) {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Ver grupo de fotos ${index + 1} de ${pages}`);
      button.setAttribute("aria-current", String(index === sliderIndex));
      button.addEventListener("click", () => { sliderIndex = index; updateSliderControls(); });
      dots.append(button);
    }
    document.querySelector("#featured-prev").disabled = sliderIndex === 0;
    document.querySelector("#featured-next").disabled = sliderIndex >= pages - 1;
  }

  function makeDishCard(group, imageIndex, description) {
    const groupSlide = getSlide(group.slide);
    const image = getImages(group.slide)[imageIndex];
    if (!image) throw new Error(`Imagem ${imageIndex + 1} ausente na categoria "${group.title}".`);

    const card = document.createElement("article");
    card.className = "dish-card";
    card.dataset.foodCategory = group.filter;

    const photo = imageButton(group.slide, imageIndex, image.alt, image.src);
    photo.classList.add("dish-photo");
    const openCue = document.createElement("span");
    openCue.className = "dish-open";
    openCue.append(
      Object.assign(document.createElement("span"), { textContent: "Ver informações deste prato" }),
      Object.assign(document.createElement("span"), { textContent: "↗" })
    );
    photo.append(openCue);

    const caption = document.createElement("div");
    caption.className = "dish-caption";
    const label = document.createElement("span");
    const category = document.createElement("small");
    category.textContent = group.title;
    const title = document.createElement("strong");
    title.textContent = description[0];
    label.append(category, title);
    caption.append(label, Object.assign(document.createElement("span"), { textContent: "↗" }));
    card.append(photo, caption);

    const visibleDescription = description[1] || groupSlide.summary;
    card.dataset.searchText = normalize(`${groupSlide.title} ${groupSlide.section} ${groupSlide.summary} ${visibleDescription} ${groupSlide.content.join(" ")}`);
    return card;
  }

  function makeCustomDishCard(item) {
    const card = document.createElement("article");
    card.className = "dish-card";
    card.dataset.foodCategory = item.filter;
    card.dataset.searchText = normalize(`${item.category} ${item.title} ${item.description} ${item.details.join(" ")}`);

    const photo = document.createElement("button");
    photo.type = "button";
    photo.className = "photo-button dish-photo";
    photo.dataset.customFood = item.id;
    photo.setAttribute("aria-label", `Abrir informações de ${item.title}`);
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      console.error(`Não foi possível carregar a imagem “${item.image}”.`);
      showToast("Não foi possível carregar esta imagem.");
    }, { once: true });
    photo.append(image);
    const openCue = document.createElement("span");
    openCue.className = "dish-open";
    openCue.append(
      Object.assign(document.createElement("span"), { textContent: "Ver informações deste prato" }),
      Object.assign(document.createElement("span"), { textContent: "↗" })
    );
    photo.append(openCue);

    const caption = document.createElement("div");
    caption.className = "dish-caption";
    const label = document.createElement("span");
    label.append(
      Object.assign(document.createElement("small"), { textContent: item.category }),
      Object.assign(document.createElement("strong"), { textContent: item.title })
    );
    caption.append(label, Object.assign(document.createElement("span"), { textContent: "↗" }));
    card.append(photo, caption);
    return card;
  }

  function renderFoodGrid() {
    const groups = [
      { slide: 7, filter: "proteinas", title: "Proteínas", entries: menuData.proteins.entries },
      { slide: 8, filter: "frutos-do-mar", title: "Frutos do mar", entries: menuData.seafood.entries },
      { slide: 9, filter: "acompanhamentos", title: "Acompanhamentos", entries: menuData.sides.entries },
      { slide: 10, filter: "sobremesas", title: "Sobremesas", entries: menuData.desserts.entries }
    ];
    const grid = document.querySelector("#food-grid");
    const fragment = document.createDocumentFragment();
    for (const group of groups) {
      group.entries.forEach((entry, index) => fragment.append(makeDishCard(group, index, entry)));
    }
    customFoodItems.forEach(item => fragment.append(makeCustomDishCard(item)));
    grid.replaceChildren(fragment);
    filterFood("all");
  }

  function filterFood(filter) {
    let visible = 0;
    for (const card of document.querySelectorAll(".dish-card")) {
      const matches = filter === "all" || card.dataset.foodCategory === filter;
      card.hidden = !matches;
      if (matches) visible++;
    }
    const count = document.querySelector('.filter-chip[data-food-filter="all"] span');
    count.textContent = String(visible);
  }

  function getMealComposition(economy = false) {
    if (economy) {
      return {
        index: 4,
        image: 1,
        label: "Opções personalizadas",
        title: "Um menu que acompanha cada classe.",
        summary: "O material contempla as classes Premium e Economy e prevê menus e bandejas personalizados para os padrões de cada companhia. A composição específica para cada serviço pode ser definida junto à equipe MCZ.",
        items: ["Tripulação e passageiros", "Menus personalizáveis", "Composição por operação", "Proteína ou opção vegetariana"]
      };
    }
    return {
      index: 13,
      image: 0,
      label: "Serviço Premium",
      title: "Refeição quente",
      summary: "Uma bandeja completa com entrada fria, prato quente, opção de proteína ou receita vegetariana, além de acompanhamentos.",
      items: ["Entrada fria", "Prato com proteína", "Opção vegetariana", "Sobremesa"]
    };
  }

  function updateMeal(economy = false) {
    economyMode = economy;
    const data = getMealComposition(economyMode);
    const slide = getSlide(data.index);
    const image = getImages(data.index)[data.image];
    elements.mealLevel.textContent = data.label;
    elements.mealTitle.textContent = data.title;
    elements.mealDescription.textContent = data.summary;
    elements.mealImage.src = image.src;
    elements.mealImage.alt = image.alt;
    elements.mealImageTrigger.dataset.detailSlide = String(data.index);
    elements.mealImageTrigger.dataset.detailImage = String(data.image);
    elements.mealDetails.dataset.detailSlide = String(data.index);
    elements.mealDetails.textContent = economyMode ? "Saiba como personalizar o menu" : "Ver composição e informações";
    elements.mealComponents.replaceChildren();
    data.items.forEach(item => {
      const chip = document.createElement("span");
      chip.textContent = item;
      elements.mealComponents.append(chip);
    });
    document.querySelectorAll(".class-button").forEach(button => {
      const active = (button.dataset.class === "economy") === economyMode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function readEdits() {
    try {
      const raw = localStorage.getItem(editStorageKey);
      if (!raw) return {};
      const value = JSON.parse(raw);
      if (value === null || typeof value !== "object" || Array.isArray(value)) throw new TypeError("Formato de edição inválido.");
      return value;
    } catch (error) {
      console.error("Não foi possível ler o conteúdo editado.", error);
      return {};
    }
  }

  function saveEdits(showConfirmation = false) {
    for (const item of document.querySelectorAll("[data-editable]")) {
      const value = item.textContent.trim();
      const key = item.dataset.editable;
      if (item.dataset.slideId) {
        const saved = savedEdits[item.dataset.slideId] || (savedEdits[item.dataset.slideId] = {});
        if (key === "content") {
          const index = Number(item.dataset.contentIndex);
          if (!Number.isInteger(index) || index < 0) continue;
          saved.content = saved.content || [];
          saved.content[index] = value;
        } else saved[key] = value;
      } else {
        const page = savedEdits.__page || (savedEdits.__page = {});
        page[key] = sanitizeEditableHTML(item.innerHTML).trim();
      }
    }
    try {
      localStorage.setItem(editStorageKey, JSON.stringify(savedEdits));
      if (showConfirmation) showToast("Textos editados salvos neste navegador.");
    } catch (error) {
      console.error("Não foi possível salvar as alterações.", error);
      showToast("Não foi possível salvar; verifique as permissões do navegador.");
    }
  }

  function restoreSavedPageText() {
    for (const item of document.querySelectorAll("[data-editable]:not([data-slide-id])")) {
      const value = savedEdits.__page?.[item.dataset.editable];
      if (typeof value === "string") {
        item.innerHTML = sanitizeEditableHTML(value);
        item.dataset.editsLoaded = "true";
      }
    }
  }

  function sanitizeEditableHTML(value) {
    const template = document.createElement("template");
    template.innerHTML = String(value);
    const allowedTags = new Set(["BR", "EM", "SPAN", "STRONG"]);
    const clean = parent => {
      for (const node of [...parent.childNodes]) {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          if (node.nodeType !== Node.TEXT_NODE) node.remove();
          continue;
        }
        if (!allowedTags.has(node.tagName)) {
          node.replaceWith(...node.childNodes);
          continue;
        }
        for (const attribute of [...node.attributes]) node.removeAttribute(attribute.name);
        clean(node);
      }
    };
    clean(template.content);
    return template.innerHTML;
  }

  function setEditing(nextState) {
    editing = nextState;
    document.body.classList.toggle("is-editing", editing);
    elements.editBar.hidden = !editing;
    for (const item of document.querySelectorAll("[data-editable]")) {
      item.contentEditable = String(editing);
      item.spellcheck = editing;
    }
    if (!editing) saveEdits(false);
  }

  function safeContent(slideIndex) {
    const slide = getSlide(slideIndex);
    const source = contentFor(slideIndex);
    const saved = savedEdits[slide.id]?.content;
    return source.map((text, index) => Array.isArray(saved) && typeof saved[index] === "string" ? saved[index] : text);
  }

  function openDetails(slideIndex, imageIndex = 0) {
    const slide = getSlide(slideIndex);
    const heading = displayTitle(slide, slideIndex);
    const images = getImages(slideIndex);
    const summary = savedEdits[slide.id]?.summary || slide.summary;
    if (editing) saveEdits(false);
    activeCustomFoodId = null;
    activeSlideIndex = slideIndex;
    elements.detailTopic.textContent = slide.section.toLocaleUpperCase("pt-BR");
    elements.detailPage.textContent = `${String(slide.number).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    setEditable(elements.detailTitle, "title", slideIndex).textContent = heading;
    setEditable(elements.detailSummary, "summary", slideIndex).textContent = summary;
    elements.detailFacts.replaceChildren();
    slide.facts.forEach(fact => {
      const chip = document.createElement("span");
      chip.textContent = fact;
      elements.detailFacts.append(chip);
    });
    elements.detailText.replaceChildren();
    safeContent(slideIndex).forEach((text, index) => {
      const paragraph = document.createElement("p");
      paragraph.className = "detail-paragraph";
      paragraph.textContent = text;
      setEditable(paragraph, "content", slideIndex);
      paragraph.dataset.contentIndex = String(index);
      elements.detailText.append(paragraph);
    });
    elements.detailNoImage.hidden = images.length !== 0;
    elements.detailGallery.replaceChildren();
    elements.downloadImage.removeAttribute("href");
    elements.downloadImage.setAttribute("aria-disabled", String(images.length === 0));
    if (images.length > 1) {
      images.forEach((image, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-thumb";
        button.dataset.galleryImage = String(index);
        button.setAttribute("aria-label", `Abrir foto ${index + 1} de ${images.length}`);
        const thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = "";
        thumb.loading = "lazy";
        button.append(thumb);
        button.addEventListener("click", () => selectDetailImage(index));
        elements.detailGallery.append(button);
      });
    }
    selectDetailImage(Math.min(Math.max(imageIndex, 0), images.length - 1));
    if (!elements.detail.open) elements.detail.showModal();
  }

  function openCustomFoodDetails(foodId) {
    const item = customFoodItems.find(food => food.id === foodId);
    if (!item) throw new RangeError(`Prato do catálogo não encontrado: ${foodId}.`);
    if (editing) saveEdits(false);
    activeCustomFoodId = item.id;
    activeSlideIndex = item.slide;
    activeImageIndex = 0;
    elements.detailTopic.textContent = item.category.toLocaleUpperCase("pt-BR");
    const itemNumber = customFoodItems.indexOf(item) + 1;
    elements.detailPage.textContent = `${String(itemNumber).padStart(2, "0")} / ${String(customFoodItems.length).padStart(2, "0")}`;
    for (const node of [elements.detailTitle, elements.detailSummary]) {
      node.removeAttribute("data-editable");
      node.removeAttribute("data-slide-id");
      node.removeAttribute("data-slide-index");
      node.contentEditable = "false";
    }
    elements.detailTitle.textContent = item.title;
    elements.detailSummary.textContent = item.description;
    elements.detailFacts.replaceChildren();
    item.facts.forEach(fact => {
      const chip = document.createElement("span");
      chip.textContent = fact;
      elements.detailFacts.append(chip);
    });
    elements.detailText.replaceChildren();
    item.details.forEach(text => {
      const paragraph = document.createElement("p");
      paragraph.className = "detail-paragraph";
      paragraph.textContent = text;
      elements.detailText.append(paragraph);
    });
    elements.detailNoImage.hidden = true;
    elements.detailGallery.replaceChildren();
    elements.detailImageFrame.classList.remove("is-zoomed");
    const photo = document.createElement("img");
    photo.src = item.image;
    photo.alt = item.title;
    photo.draggable = false;
    photo.decoding = "async";
    photo.addEventListener("error", () => {
      console.error(`Não foi possível carregar a imagem “${item.image}”.`);
      elements.detailImageFrame.textContent = "Não foi possível carregar esta imagem. Tente novamente mais tarde.";
      showToast("Não foi possível abrir esta imagem.");
    }, { once: true });
    elements.detailImageFrame.replaceChildren(photo);
    elements.zoomImage.disabled = false;
    elements.zoomImage.setAttribute("aria-pressed", "false");
    elements.zoomImage.textContent = "Ampliar imagem";
    elements.imagePrevious.disabled = true;
    elements.imageNext.disabled = true;
    elements.imageIndex.textContent = "01 / 01";
    elements.downloadImage.href = item.image;
    elements.downloadImage.download = item.image.split("/").pop();
    elements.downloadImage.setAttribute("aria-disabled", "false");
    if (!elements.detail.open) elements.detail.showModal();
  }

  function selectDetailImage(index) {
    const images = getImages(activeSlideIndex);
    const image = images[index];
    elements.detailImageFrame.classList.remove("is-zoomed");
    elements.zoomImage.setAttribute("aria-pressed", "false");
    elements.zoomImage.textContent = "Ampliar imagem";

    if (!image) {
      elements.detailImageFrame.replaceChildren();
      const placeholder = document.createElement("div");
      placeholder.className = "detail-placeholder";
      placeholder.textContent = displayTitle(getSlide(activeSlideIndex), activeSlideIndex);
      elements.detailImageFrame.append(placeholder);
      elements.zoomImage.disabled = true;
      elements.imagePrevious.disabled = true;
      elements.imageNext.disabled = true;
      elements.imageIndex.textContent = "Texto";
      elements.downloadImage.removeAttribute("href");
      return;
    }

    activeImageIndex = index;
    elements.zoomImage.disabled = false;
    const photo = document.createElement("img");
    photo.src = image.src;
    photo.alt = image.alt;
    photo.draggable = false;
    photo.decoding = "async";
    photo.addEventListener("error", () => {
      console.error(`Não foi possível carregar a imagem “${image.src}”.`);
      elements.detailImageFrame.textContent = "Não foi possível carregar esta imagem. Tente novamente mais tarde.";
      showToast("Não foi possível abrir esta imagem.");
    }, { once: true });
    elements.detailImageFrame.replaceChildren(photo);
    elements.downloadImage.href = image.src;
    elements.downloadImage.download = image.name;
    elements.downloadImage.setAttribute("aria-disabled", "false");
    elements.imagePrevious.disabled = images.length < 2;
    elements.imageNext.disabled = images.length < 2;
    elements.imageIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
    elements.detailGallery.querySelectorAll(".gallery-thumb").forEach((button, buttonIndex) => {
      button.setAttribute("aria-current", String(buttonIndex === index));
    });
  }

  function navigateDetailImage(amount) {
    if (activeCustomFoodId) return;
    const images = getImages(activeSlideIndex);
    if (images.length < 2) return;
    selectDetailImage((activeImageIndex + amount + images.length) % images.length);
  }

  function closeDetails() {
    if (elements.detail.open) elements.detail.close();
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2600);
  }

  function searchMatches(term) {
    const query = normalize(term);
    if (!query) return [];
    const slideResults = slides.map((slide, index) => {
      const title = displayTitle(slide, index);
      const summary = displaySummary(slide);
      const section = normalize(slide.section);
      const normalizedTitle = normalize(title);
      const normalizedSummary = normalize(summary);
      const relevance = normalizedTitle === query ? 0
        : normalizedTitle.includes(query) ? 1
          : section.includes(query) ? 2
            : normalizedSummary.includes(query) ? 3 : 4;
      return {
        slide,
        index,
        title,
        summary,
        context: slide.section,
        relevance,
        text: [slide.section, title, summary, ...slide.facts, ...safeContent(index)].join(" ")
      };
    }).filter(item => normalize(item.text).includes(query));
    const pageResults = [...document.querySelectorAll(".portfolio-step")].map((link, index) => {
      const target = document.querySelector(link.hash);
      const title = link.querySelector("strong").textContent;
      const summary = link.querySelector("small").textContent;
      const text = `${link.textContent} ${target?.textContent || ""}`;
      const normalizedTitle = normalize(title);
      return {
        anchor: link.hash,
        title,
        summary,
        context: "Portfólio comercial",
        relevance: normalizedTitle === query ? 0 : normalizedTitle.includes(query) ? 1 : 3,
        text,
        order: index
      };
    }).filter(item => normalize(item.text).includes(query));
    const foodResults = customFoodItems.map((food, order) => ({
      food,
      title: food.title,
      summary: food.description,
      context: food.category,
      relevance: normalize(food.title) === query ? 0 : normalize(food.title).includes(query) ? 1 : 3,
      text: [food.category, food.title, food.description, ...food.facts, ...food.details].join(" "),
      order
    })).filter(item => normalize(item.text).includes(query));
    return [...slideResults, ...pageResults, ...foodResults]
      .sort((left, right) => left.relevance - right.relevance || (left.index ?? left.order) - (right.index ?? right.order));
  }

  function renderSearchResults() {
    const query = elements.searchInput.value.trim();
    elements.searchResults.replaceChildren();
    elements.searchResults.hidden = query.length === 0;
    if (!query) return;
    const matches = searchMatches(query);
    if (matches.length === 0) {
      const empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent = "Nenhum tema encontrado. Tente outro serviço ou ingrediente.";
      elements.searchResults.append(empty);
      return;
    }
    matches.forEach(result => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "search-result";
      const number = document.createElement("span");
      number.className = "search-result-number";
      number.textContent = String(result.slide ? result.slide.number : (result.order + 1)).padStart(2, "0");
      const copy = document.createElement("span");
      copy.append(Object.assign(document.createElement("span"), { className: "search-result-title", textContent: result.title }));
      copy.append(Object.assign(document.createElement("span"), { className: "search-result-context", textContent: result.context }));
      button.append(number, copy, Object.assign(document.createElement("span"), { textContent: "↗" }));
      button.addEventListener("click", () => {
        closeSearch();
        if (result.food) openCustomFoodDetails(result.food.id);
        else if (result.slide) openDetails(result.index, 0);
        else document.querySelector(result.anchor).scrollIntoView({ behavior: "smooth", block: "start" });
      });
      elements.searchResults.append(button);
    });
  }

  function openSearch() {
    elements.searchPanel.hidden = false;
    elements.searchToggle.setAttribute("aria-expanded", "true");
    elements.searchInput.focus();
  }

  function closeSearch() {
    elements.searchPanel.hidden = true;
    elements.searchToggle.setAttribute("aria-expanded", "false");
    elements.searchInput.value = "";
    elements.searchResults.replaceChildren();
    elements.searchResults.hidden = true;
    elements.searchToggle.focus();
  }

  function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(text);
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.cssText = "position:fixed;opacity:0";
    document.body.append(textarea);
    textarea.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } finally {
      textarea.remove();
    }
    if (!copied) return Promise.reject(new Error("O navegador não permitiu copiar o texto."));
    return Promise.resolve();
  }

  function detailsAsText(slideIndex) {
    if (activeCustomFoodId) {
      const food = customFoodItems.find(item => item.id === activeCustomFoodId);
      if (!food) throw new RangeError(`Prato do catálogo não encontrado: ${activeCustomFoodId}.`);
      return [
        `Catering MCZ — ${food.title}`,
        food.category,
        food.description,
        "",
        ...food.details.map(paragraph => `• ${paragraph}`)
      ].join("\n");
    }
    const slide = getSlide(slideIndex);
    return [
      `Catering MCZ — ${displayTitle(slide, slideIndex)}`,
      slide.section,
      savedEdits[slide.id]?.summary || slide.summary,
      "",
      ...safeContent(slideIndex).map(paragraph => `• ${paragraph}`)
    ].join("\n");
  }

  function buildSearchableContent() {
    return slides.map((slide, index) => `SLIDE ${String(slide.number).padStart(2, "0")} — ${displayTitle(slide, index)}\n${slide.section}\n${displaySummary(slide)}\nDestaques: ${slide.facts.join(" · ")}\n\n${safeContent(index).map(text => `• ${text}`).join("\n")}`).join("\n\n" + "—".repeat(42) + "\n\n");
  }

  function updateFoodFilterButtons(active) {
    for (const button of document.querySelectorAll(".filter-chip")) {
      const isActive = button.dataset.foodFilter === active;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    }
  }

  async function sharePage() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Catering MCZ", text: "Conheça a proposta e os serviços da Catering MCZ.", url: window.location.href });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
        console.error("Não foi possível compartilhar esta página.", error);
        showToast("Não foi possível abrir o compartilhamento deste dispositivo.");
        return;
      }
    }
    try {
      await copyToClipboard(window.location.href);
      showToast("Link da apresentação copiado. Compartilhe com seu cliente.");
    } catch (error) {
      console.error("Não foi possível copiar o link da apresentação.", error);
      showToast("Não foi possível copiar o link. Tente novamente em um navegador atualizado.");
    }
  }

  function closeMobileNavigation() {
    elements.menuToggle.setAttribute("aria-expanded", "false");
    elements.menuToggle.setAttribute("aria-label", "Abrir menu");
    elements.navigation.classList.remove("is-open");
  }

  document.addEventListener("click", event => {
    const foodTrigger = event.target.closest("[data-custom-food]");
    if (foodTrigger) {
      event.preventDefault();
      openCustomFoodDetails(foodTrigger.dataset.customFood);
      return;
    }
    const trigger = event.target.closest("[data-detail-slide]");
    if (trigger) {
      event.preventDefault();
      openDetails(Number(trigger.dataset.detailSlide), Number(trigger.dataset.detailImage || 0));
    }
  });

  elements.searchToggle.addEventListener("click", () => {
    if (elements.searchPanel.hidden) openSearch();
    else closeSearch();
  });
  elements.searchInput.addEventListener("input", renderSearchResults);
  elements.searchInput.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
    }
    if (event.key === "Enter") elements.searchResults.querySelector(".search-result")?.click();
  });
  document.querySelector("#search-close").addEventListener("click", closeSearch);
  document.addEventListener("click", event => {
    if (!elements.searchPanel.hidden && !event.target.closest("#search-panel") && !event.target.closest("#search-toggle")) closeSearch();
  });

  elements.menuToggle.addEventListener("click", () => {
    const open = elements.menuToggle.getAttribute("aria-expanded") !== "true";
    elements.menuToggle.setAttribute("aria-expanded", String(open));
    elements.menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    elements.navigation.classList.toggle("is-open", open);
  });
  elements.navigation.addEventListener("click", event => {
    if (event.target.closest("a")) closeMobileNavigation();
  });

  document.querySelectorAll(".filter-chip").forEach(button => {
    button.addEventListener("click", () => {
      filterFood(button.dataset.foodFilter);
      updateFoodFilterButtons(button.dataset.foodFilter);
    });
  });

  document.querySelectorAll(".class-button").forEach(button => {
    button.addEventListener("click", () => updateMeal(button.dataset.class === "economy"));
  });

  document.querySelector("#featured-prev").addEventListener("click", () => {
    sliderIndex = Math.max(0, sliderIndex - 1);
    updateSliderControls();
  });
  document.querySelector("#featured-next").addEventListener("click", () => {
    sliderIndex++;
    updateSliderControls();
  });
  document.querySelector(".featured-viewport").addEventListener("pointerdown", event => {
    if (event.pointerType === "touch") sliderDragging = { x: event.clientX, y: event.clientY };
  }, { passive: true });
  document.querySelector(".featured-viewport").addEventListener("pointerup", event => {
    if (!sliderDragging || event.pointerType !== "touch") return;
    const distanceX = event.clientX - sliderDragging.x;
    const distanceY = event.clientY - sliderDragging.y;
    sliderDragging = null;
    if (Math.abs(distanceX) > 40 && Math.abs(distanceX) > Math.abs(distanceY)) {
      sliderIndex += distanceX < 0 ? 1 : -1;
      updateSliderControls();
    }
  }, { passive: true });
  document.querySelector(".featured-viewport").addEventListener("pointercancel", () => { sliderDragging = null; });

  document.querySelector("#detail-close").addEventListener("click", closeDetails);
  elements.detail.addEventListener("click", event => {
    if (event.target === elements.detail) closeDetails();
  });
  document.querySelector("#image-previous").addEventListener("click", () => navigateDetailImage(-1));
  document.querySelector("#image-next").addEventListener("click", () => navigateDetailImage(1));
  elements.zoomImage.addEventListener("click", () => {
    if (elements.zoomImage.disabled) return;
    const zoomed = elements.detailImageFrame.classList.toggle("is-zoomed");
    elements.zoomImage.setAttribute("aria-pressed", String(zoomed));
    elements.zoomImage.textContent = zoomed ? "Reduzir imagem" : "Ampliar imagem";
  });
  elements.detail.addEventListener("close", () => {
    activeCustomFoodId = null;
    elements.detailImageFrame.classList.remove("is-zoomed");
    elements.zoomImage.setAttribute("aria-pressed", "false");
    elements.zoomImage.textContent = "Ampliar imagem";
  });
  document.querySelector("#copy-details").addEventListener("click", async () => {
    try {
      await copyToClipboard(detailsAsText(activeSlideIndex));
      showToast("Informações do conteúdo copiadas.");
    } catch (error) {
      console.error("Não foi possível copiar as informações do conteúdo.", error);
      showToast("Não foi possível copiar; verifique as permissões do navegador.");
    }
  });

  document.querySelector("#back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.querySelector("#save-edits").addEventListener("click", () => saveEdits(true));
  document.querySelector("#reset-edits").addEventListener("click", () => {
    if (!window.confirm("Restaurar todos os textos originais? Isso remove as alterações salvas neste navegador.")) return;
    try {
      localStorage.removeItem(editStorageKey);
      window.location.reload();
    } catch (error) {
      console.error("Não foi possível restaurar o conteúdo original.", error);
      showToast("O navegador não permitiu restaurar os textos originais.");
    }
  });
  document.addEventListener("input", event => {
    if (editing && event.target.matches("[data-editable]")) saveEdits(false);
  });
  document.addEventListener("keydown", event => {
    const target = event.target;
    const isTyping = target.isContentEditable || target.matches("input,textarea,select") || event.ctrlKey || event.metaKey || event.altKey || event.isComposing;
    if (elements.detail.open) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDetails();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateDetailImage(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateDetailImage(-1);
      }
      return;
    }
    if (isTyping) return;
    if (event.key === "/") {
      event.preventDefault();
      openSearch();
    } else if (event.key.toLowerCase() === "e") {
      event.preventDefault();
      setEditing(!editing);
    }
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateSliderControls, 130);
  }, { passive: true });

  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
  renderFeaturedSlider();
  renderFoodGrid();
  updateMeal(false);
  restoreSavedPageText();

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }
    }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));
  } else {
    document.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));
  }
})();
