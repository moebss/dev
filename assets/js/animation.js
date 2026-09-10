const plexifyGsap = function () {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    // MotionPathPlugin,
    SplitText
  );
  let smoother;

  if (!smoother) {
    smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  }


  const headingAnimation = () => {
    const headings = document.querySelectorAll(".headline");

	  headings.forEach((el) => {
		gsap.set(el, { opacity: 1 });

		const split = SplitText.create(el, {
		  type: "words,lines",
		  linesClass: "line",
		  autoSplit: true,
		  mask: "lines"
		});

		gsap.from(split.lines, {
		  scrollTrigger: {
			trigger: el,
			start: "top 80%",
			toggleActions: "play none none none",
		  },
		  duration: 0.6,
		  yPercent: 100,
		  opacity: 0,
		  stagger: 0.1,
		  ease: "expo.out"
		});
	  });
  };

  const scrollTextAnimation = () => {
    const triggers = [];
    const scrollSplitInstances = [];

    const headings = document.querySelectorAll(
      ".pxl-heading-scroll-effect .heading-text"
    );

    if (headings.length === 0) return;

    headings.forEach((heading) => {
      heading.innerHTML = heading.textContent;
      const split = new SplitText(heading, { type: "lines" });
      scrollSplitInstances.push(split);

      split.lines.forEach((line) => {
        const tween = gsap.to(line, {
          backgroundPositionX: "0%",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top 50%",
            end: "bottom center",
            scrub: 1,
          },
        });

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      scrollSplitInstances.forEach((split) => split.revert());
    };
  };

  const plexifyScrollImageEffect = (scopeSelector) => {
    gsap.registerPlugin(ScrollTrigger);

    const scopes =
      typeof scopeSelector === "string"
        ? document.querySelectorAll(scopeSelector)
        : scopeSelector instanceof Element
        ? [scopeSelector]
        : [];

    scopes.forEach((scope) => {
      const evenItems = scope.querySelectorAll(
        ".pxl-group-image .inner-item:nth-child(even):not(:first-child) .item-image"
      );
      const oddItems = scope.querySelectorAll(
        ".pxl-group-image .inner-item:nth-child(odd):not(:first-child) .item-image"
      );

      const referenceImage = scope.querySelector(
        ".pxl-group-image .inner-item .item-image"
      );
      if (!referenceImage) return;

      const imageWidth = referenceImage.offsetWidth;

      evenItems.forEach((img, i) => {
        const offset = i % 2 === 0 ? imageWidth / 3.5 : -imageWidth / 3.5;
        const angle = i % 2 === 0 ? 7 : -7;
        gsap.set(img, { x: offset, rotation: angle });
      });

      oddItems.forEach((img, i) => {
        const offset = i % 2 === 0 ? -imageWidth / 2 : imageWidth / 2;
        const angle = i % 2 === 0 ? -14 : 14;
        gsap.set(img, { x: offset, rotation: angle });
      });

      [...evenItems, ...oddItems].forEach((img) => {
        gsap.to(img, {
          x: 0,
          rotation: 0,
          scrollTrigger: {
            trigger: img,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  }

  const bannerTabs = document.querySelectorAll(".banner-tabs");
  bannerTabs.forEach((tabItem) => {
    tabItem.addEventListener("click", function () {
      setTimeout(() => {
        plexifyScrollImageEffect(".pxl-group-image");
      },100);
    });
  });

  function plexifyTypewriter(scope) {
    if (typeof scope === "string") {
      scope = document.querySelector(scope);
    }

    if (!(scope instanceof Element)) return;

    const elements = scope.querySelectorAll(".typewrite .pxl-item--text");

    if (elements.length > 0) {
      let index = 0;

      function typewriterLoop(i) {
        elements.forEach((el) => el.classList.remove("is-active"));

        const currentElement = elements[i];
        currentElement.classList.add("is-active");

        setTimeout(() => {
          currentElement.classList.remove("is-active");
          const nextIndex = (i + 1) % elements.length;
          typewriterLoop(nextIndex);
        }, 3500);
      }

      typewriterLoop(index);
    }
  }

  const handleTeamHover = () => {
    let destroyFn = null;

    ScrollTrigger.matchMedia({
      "(min-width: 567px)": () => {
        const boxes = document.querySelectorAll(".pxl-team-list .box-item");
        const cleanups = [];

        boxes.forEach((box) => {
          const reveal = box.querySelector(".item-image");
          const revealImg = reveal?.querySelector(".reveal-image");

          if (!reveal || !revealImg) return;

          const positionElement = (ev) => {
            const parent = ev.currentTarget;
            const parentRect = parent.getBoundingClientRect();
            const parentWidth = parent.offsetWidth;
            const revealWidth = reveal.offsetWidth;
            const mouseX = ev.clientX - parentRect.left;
            const padding = 60;
            const finalX = mouseX + padding;

            reveal.style.top = "50%";
            reveal.style.transform = "translateY(-50%)";

            if (finalX + revealWidth > parentWidth) {
              const rightDistance = parentWidth - mouseX;
              reveal.style.right = `${rightDistance + padding}px`;
              reveal.style.left = "auto";
            } else {
              reveal.style.left = `${finalX}px`;
              reveal.style.right = "auto";
            }
          };

          const showImage = () => {
            gsap.killTweensOf(revealImg);
            gsap
              .timeline()
              .set(reveal, { opacity: 1, zIndex: 1000 })
              .fromTo(
                revealImg,
                { scaleX: 0, opacity: 0, transformOrigin: "left center" },
                { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
              );
          };

          const hideImage = () => {
            gsap.killTweensOf(revealImg);
            gsap
              .timeline()
              .to(revealImg, {
                scaleX: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                transformOrigin: "right center",
              })
              .set(reveal, { opacity: 0, zIndex: "" });
          };

          const mouseEnterHandler = (e) => {
            positionElement(e);
            showImage();
          };

          const mouseMoveHandler = (e) => {
            positionElement(e);
          };

          box.addEventListener("mouseenter", mouseEnterHandler);
          box.addEventListener("mousemove", mouseMoveHandler);
          box.addEventListener("mouseleave", hideImage);

          cleanups.push(() => {
            box.removeEventListener("mouseenter", mouseEnterHandler);
            box.removeEventListener("mousemove", mouseMoveHandler);
            box.removeEventListener("mouseleave", hideImage);
          });
        });

        destroyFn = () => {
          cleanups.forEach((fn) => fn());
        };
      },
    });

    return () => {
      if (destroyFn) destroyFn();
    };
  };

  const headerSticky = () => {
    const header = document.querySelector(".site-header");
    const sidebarStickyWrap = document.querySelector(".sidebar-sticky");

    if (!header) return;

    let lastScroll = 0;
    let animationFrameId;

    const updateStickyHeader = (scrollY) => {
      const scrollingDown = scrollY > lastScroll;
      const shouldFix = !scrollingDown && scrollY > 0;

      header.classList.toggle("is-fixed", shouldFix);

      if (sidebarStickyWrap) {
        const headerHeight = header.offsetHeight || 80;
        sidebarStickyWrap.style.top = shouldFix
          ? `${headerHeight + 10}px`
          : "60%";
      }

      lastScroll = scrollY;
    };

    const smootherScrollLoop = () => {
      if (typeof smoother?.scrollTop === "function") {
        const currentScroll = smoother.scrollTop();
        updateStickyHeader(currentScroll);
      } else {
        const currentScroll =
          window.scrollY || document.documentElement.scrollTop;
        updateStickyHeader(currentScroll);
      }

      animationFrameId = requestAnimationFrame(smootherScrollLoop);
    };

    animationFrameId = requestAnimationFrame(smootherScrollLoop);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  };

  const linkSmoothScroll = () => {
    const clickHandler = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      if (typeof smoother?.scrollTo === "function") {
        smoother.scrollTo(targetEl, true);
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  };

  let cleanupSticky = null;
  const initStickyPosition = (selector = ".my-sticky", offset = 100) => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": () => {
        const elements = document.querySelectorAll(selector);
        const triggers = [];
        elements.forEach((el) => {
          const parent = el.parentElement;
          if (!parent) return;

          const spacer = document.createElement("div");
          spacer.style.position = "relative";
          spacer.style.height = el.classList.contains("sidebar-sticky") ? 0 : `${el.offsetHeight + offset}px`;
          parent.insertBefore(spacer, el);
          spacer.appendChild(el);

          Object.assign(el.style, {
            position: "absolute",
            top: el.classList.contains("space-top-0") ?  0 : `${offset}px`,
            left: 0,
            right: 0,
          });

          const trigger = ScrollTrigger.create({
            trigger: spacer,
            start: "top top",
            end: () => `+=${parent.offsetHeight - el.offsetHeight - offset}`,
            pin: el,
            pinSpacing: false,
            scroller: "#smooth-wrapper",
            anticipatePin: 1,
          });

          triggers.push({ trigger, spacer, el });
        });

        return () => {
          triggers.forEach(({ trigger, spacer, el }) => {
            trigger.kill();

            const parent = spacer.parentElement;
            if (parent) {
              parent.insertBefore(el, spacer);
              parent.removeChild(spacer);
            }

            Object.assign(el.style, {
              position: "",
              top: "",
              left: "",
              right: "",
            });
          });
        };

      }
    });
  };  

  const applySticky = () => {
    if (cleanupSticky) cleanupSticky();       
    cleanupSticky = initStickyPosition();   
  };

  const initVideoAnimation = () => {
    const imgZoomElements = document.querySelectorAll(".img-zoom");

    imgZoomElements.forEach((imgZoom) => {
      const target = imgZoom.querySelector(".img-box");
      if (!target) return;

      ScrollTrigger.create({
        trigger: imgZoom,
        start: "top+=100 bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scaleValue = Math.min(1.5, 1 + progress);
          target.style.transform = `scale(${scaleValue.toFixed(3)})`;
        },
      });
    });
  };

  const initCardSticky = () => {
    let cleanupFn;

    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": () => {
        const cards = gsap.utils.toArray(".stackCard");
        if (!cards.length) return;

        const triggers = [];
        const animations = [];

        const updateOpacity = (currentIndex) => {
          cards.forEach((card, index) => {
            gsap.to(card, {
              opacity: index === currentIndex ? 1 : index < currentIndex ? 0.5 : 1,
              duration: 0.2,
            });
          });
        };

        cards.forEach((card, index) => {
          const scale = 1 - (cards.length - index) * 0.025;

          const scaleDown = gsap.to(card, {
            scale,
            ease: "none",
            paused: true,
          });

          const st = ScrollTrigger.create({
            trigger: card,
            start: "bottom bottom-=100",
            end: () => {
              const lastCard = cards[cards.length - 1];
              return ScrollTrigger.getById("last-card")?.start || ScrollTrigger.create({
                trigger: lastCard,
                start: "bottom bottom-=100",
                id: "last-card",
              }).start;
            },
            pin: true,
            pinSpacing: false,
            animation: scaleDown,
            toggleActions: "restart none none reverse",
            onEnter: () => updateOpacity(index),
            onEnterBack: () => updateOpacity(index),
            onLeaveBack: () => updateOpacity(index - 1),
          });

          triggers.push(st);
          animations.push(scaleDown);
        });

        cleanupFn = () => {
          triggers.forEach(t => t.kill());
          animations.forEach(a => a.kill());
        };
      },
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  };

 const stickyCard = () => {
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": () => {
        const contentElements = gsap.utils.toArray(".content--sticky");
        const total = contentElements.length;

        const triggers = [];

        contentElements.forEach((el, index) => {
          const isLast = index === total - 1;

          if (!isLast) {
            const pinTrigger = ScrollTrigger.create({
              trigger: el,
              start: "top top",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
            });
            triggers.push(pinTrigger);
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          tl.to(
            el,
            {
              ease: "none",
              startAt: { filter: "brightness(100%) contrast(100%)" },
              filter: isLast ? "none" : "brightness(60%) contrast(135%)",
              yPercent: isLast ? 0 : -15,
            },
            0
          );

          tl.to(
            el.querySelector(".content__img"),
            {
              scale: 1.5,
              ease: "power1.in",
            },
            0
          );
        });

        ScrollTrigger.refresh();
        return () => {
          triggers.forEach((trigger) => trigger.kill());
        };
      },
    });
  };

	const dzPinArea = () => {
	  const pin = gsap.matchMedia();
	  pin.add("(min-width: 1199px)", () => {
		const panels = document.querySelectorAll(".dz-pin-card");
		panels.forEach((section) => {
		  ScrollTrigger.create({
			trigger: section,
			pin: section,
			scrub: 1,
			start: "top 10%",
			end: "bottom 99%",
			endTrigger: ".dz-pin-area",
			pinSpacing: false,
			markers: false,
		  });
		});

		ScrollTrigger.refresh();
	  });
	};	

  const imageHover = () => {
    if (document.querySelectorAll(".dz-hover-item").length) {
      const hoverAnimationDo = (container, images) => {
        const img = images[0];
        const displacement = container.dataset.displacement;
        const intensity = container.dataset.intensity || undefined;
        const speedIn = container.dataset.speedin || undefined;
        const speedOut = container.dataset.speedout || undefined;
        const easing = container.dataset.easing || undefined;

        const hover = new hoverEffect({
          parent: container,
          intensity,
          speedIn,
          speedOut,
          easing,
          hover: false,
          image1: img.getAttribute("src"),
          image2: img.getAttribute("src"),
          displacementImage: displacement,
          imagesRatio: img.naturalHeight / img.naturalWidth,
        });

        const hoverItem = container.closest(".dz-hover-item");
        if (hoverItem) {
          hoverItem.addEventListener("mouseenter", () => hover.next());
          hoverItem.addEventListener("mouseleave", () => hover.previous());
        }
      };

      const hoverAnimation = () => {
        const imageContainers = document.querySelectorAll(".dz-hover-img");

        imageContainers.forEach((container) => {
          const images = container.querySelectorAll("img");
          const firstImg = images[0];

          if (firstImg.complete) {
            hoverAnimationDo(container, images);
          } else {
            firstImg.addEventListener("load", () => {
              hoverAnimationDo(container, images);
            });
          }
        });
      };

      hoverAnimation();
    }
  };

  const handleBtnHover = () => {
    class FlairButton {
      constructor(buttonElement) {
        this.button = buttonElement;
        this.flair = buttonElement.querySelector(".button-flair");

        if (!this.flair) return;

        this.xSet = gsap.quickSetter(this.flair, "xPercent");
        this.ySet = gsap.quickSetter(this.flair, "yPercent");

        this.mouseEnterHandler = (e) => {
          const { x, y } = this.getXY(e);
          this.xSet(x);
          this.ySet(y);
          gsap.to(this.flair, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        this.mouseMoveHandler = (e) => {
          const { x, y } = this.getXY(e);
          gsap.to(this.flair, {
            xPercent: x,
            yPercent: y,
            duration: 0.4,
            ease: "power2",
          });
        };

        this.mouseLeaveHandler = (e) => {
          const { x, y } = this.getXY(e);
          gsap.killTweensOf(this.flair);
          gsap.to(this.flair, {
            xPercent: x,
            yPercent: y,
            scale: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        this.addEvents();
      }

      getXY(e) {
        const { left, top, width, height } =
          this.button.getBoundingClientRect();
        const x = gsap.utils.clamp(
          0,
          100,
          gsap.utils.mapRange(0, width, 0, 100)(e.clientX - left)
        );
        const y = gsap.utils.clamp(
          0,
          100,
          gsap.utils.mapRange(0, height, 0, 100)(e.clientY - top)
        );
        return { x, y };
      }

      addEvents() {
        this.button.addEventListener("mouseenter", this.mouseEnterHandler);
        this.button.addEventListener("mousemove", this.mouseMoveHandler);
        this.button.addEventListener("mouseleave", this.mouseLeaveHandler);
      }

      destroy() {
        this.button.removeEventListener("mouseenter", this.mouseEnterHandler);
        this.button.removeEventListener("mousemove", this.mouseMoveHandler);
        this.button.removeEventListener("mouseleave", this.mouseLeaveHandler);
      }
    }

    const cleanupFns = [];

    const buttons = document.querySelectorAll(".flairBtn");
    if (buttons.length) {
      buttons.forEach((btn) => {
        if (!btn.classList.contains("is-flair-initialized")) {
          const instance = new FlairButton(btn);
          cleanupFns.push(() => instance.destroy());
          btn.classList.add("is-flair-initialized");
        }
      });
    }

    const magneticBtns = document.querySelectorAll(".magneticBtn");
    if (magneticBtns.length) {
      magneticBtns.forEach((btn) => {
        const xTo = gsap.quickTo(btn, "x", {
          duration: 1.2,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(btn, "y", {
          duration: 1.2,
          ease: "power3.out",
        });

        const handleMagneticMouseMove = (e) => {
          const { left, top, width, height } = btn.getBoundingClientRect();
          const x = e.clientX - (left + width / 2);
          const y = e.clientY - (top + height / 2);
          xTo(x);
          yTo(y);
        };

        const handleMagneticMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        btn.addEventListener("mousemove", handleMagneticMouseMove);
        btn.addEventListener("mouseleave", handleMagneticMouseLeave);

        cleanupFns.push(() => {
          btn.removeEventListener("mousemove", handleMagneticMouseMove);
          btn.removeEventListener("mouseleave", handleMagneticMouseLeave);
        });
      });
    }

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  };

  function plexifyEffectTextTrail(scope) {
    if (typeof scope === "string") {
      scope = document.querySelector(scope);
    }
    if (!(scope instanceof Element)) return;

    const widget = scope.querySelector(".pxl-text-trail");
    if (!widget) return;

    const images = [...widget.querySelectorAll(".inner-item .item-text")];

    const MathUtils = {
      lerp: (a, b, n) => (1 - n) * a + n * b,
      distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
    };

    const getMousePos = (ev) => ({ x: ev.clientX, y: ev.clientY });

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let cacheMousePos = { x: 0, y: 0 };

    widget.addEventListener("mousemove", (ev) => {
      mousePos = getMousePos(ev);
    });

    const getMouseDistance = () =>
      MathUtils.distance(
        mousePos.x,
        mousePos.y,
        lastMousePos.x,
        lastMousePos.y
      );

    class Image {
      constructor(el) {
        this.DOM = { el };
        this.defaultStyle = { x: 0, y: 0, opacity: 0 };
        this.getRect();
        this.initEvents();
      }

      initEvents() {
        window.addEventListener("resize", () => this.resize());
      }

      resize() {
        gsap.set(this.DOM.el, this.defaultStyle);
        this.getRect();
      }

      getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
      }

      isActive() {
        return (
          gsap.getTweensOf(this.DOM.el).length > 0 ||
          this.DOM.el.style.opacity !== "0"
        );
      }
    }

    class ImageTrail {
      constructor() {
        this.images = images.map((img) => new Image(img));
        this.imagesTotal = this.images.length;
        this.imgPosition = 0;
        this.zIndexVal = 1;
        this.threshold = 100;

        requestAnimationFrame(() => this.render());
      }

      render() {
        const distance = getMouseDistance();

        cacheMousePos.x = MathUtils.lerp(
          cacheMousePos.x || mousePos.x,
          mousePos.x,
          0.1
        );
        cacheMousePos.y = MathUtils.lerp(
          cacheMousePos.y || mousePos.y,
          mousePos.y,
          0.1
        );

        if (distance > this.threshold) {
          this.showNextImage();
          this.zIndexVal++;
          this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
          lastMousePos = { ...mousePos };
        }

        const isIdle = this.images.every((img) => !img.isActive());
        if (isIdle && this.zIndexVal !== 1) {
          this.zIndexVal = 1;
        }

        requestAnimationFrame(() => this.render());
      }

      showNextImage() {
        const img = this.images[this.imgPosition];
        gsap.killTweensOf(img.DOM.el);

        const tl = gsap.timeline();

        tl.set(
          img.DOM.el,
          {
            opacity: 1,
            scale: 1,
            zIndex: this.zIndexVal,
            x: cacheMousePos.x - img.rect.width / 2,
            y: cacheMousePos.y - img.rect.height / 2,
          },
          0
        );

        tl.to(
          img.DOM.el,
          {
            duration: 1.8,
            ease: "expo.out",
            x: mousePos.x - img.rect.width / 2,
            y: mousePos.y - img.rect.height / 2,
          },
          0
        );

        tl.to(
          img.DOM.el,
          {
            duration: 0.8,
            ease: "power1.out",
            opacity: 0,
          },
          0.8
        );

        tl.to(
          img.DOM.el,
          {
            duration: 0.8,
            ease: "quint.inOut",
            scale: 2,
          },
          0.8
        );
      }
    }

    new ImageTrail();
  }

  const customScroll = () => {
    const content = document.querySelectorAll(".custom-scroll");

    content.forEach((item) => {
      item.addEventListener(
        "wheel",
        function (e) {
          e.stopPropagation();
        },
        { passive: false }
      );

      let startY = 0;
      let startX = 0;

      item.addEventListener(
        "touchstart",
        (e) => {
          const touch = e.touches[0];
          startY = touch.clientY;
          startX = touch.clientX;
        },
        { passive: true }
      );

      item.addEventListener(
        "touchmove",
        (e) => {
          const touch = e.touches[0];
          const deltaY = startY - touch.clientY;
          const deltaX = startX - touch.clientX;

          item.scrollTop += deltaY;
          item.scrollLeft += deltaX;

          startY = touch.clientY;
          startX = touch.clientX;

          e.stopPropagation();
          e.preventDefault();
        },
        { passive: false }
      );
    });
  };

  document.querySelectorAll(".sticky-update-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        applySticky();
      }, 200);
    });
  });

  return {
    init() {	
		plexifyScrollImageEffect(".pxl-group-image");
		plexifyTypewriter(".main-banner");
		plexifyEffectTextTrail(".text-trail-wrapper");
		handleBtnHover();
		handleTeamHover();
		stickyCard();
		dzPinArea();
		initCardSticky();
		headerSticky();
		linkSmoothScroll();
		initVideoAnimation();
		headingAnimation();
		applySticky();
		scrollTextAnimation();
		customScroll();
		imageHover();
    },
    resize() {
		scrollTextAnimation();
    },
  };
};

window.addEventListener("load", () => {
	plexifyGsap().init();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    plexifyGsap().resize();
    ScrollTrigger.refresh();
  }, 250);
});
