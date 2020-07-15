new Vue({
  el: ".area",
  data() {
    return {
      show: true,
      photoSrc: null,
      selectedID: null,
      elementId: null,
      nextPhoto: null,
      photoCount: null,
      className: "className",
      previousClass: "previousButton",
      nextClass: "nextButton",
    };
  },
  methods: {
    showImage(e) {
      this.show = false;
      this.photoSrc = e.target.attributes.src.nodeValue;
      this.selectedID = e.target.attributes.id.value;
    },
    closeButton() {
      this.show = true;
    },
    nextButton(e) {
      this.elementId = e.target.nextElementSibling.id;
      this.photoCount = this.$refs.box.childElementCount;

      this.photoSrc = this.$refs.box.children[
        this.elementId
      ].firstChild.attributes.src.nodeValue;

      this.selectedID = this.$refs.box.children[this.elementId].firstChild.id;

      if (this.selectedID == this.photoCount) {
        e.target.attributes.class.value = this.className;
      }
      if (this.selectedID > 1) {
        this.$refs.previousButton.attributes.class.value = this.previousClass;
      }
    },

    previousButton(e) {
      this.elementId = e.target.nextElementSibling.nextElementSibling.id;
      this.photoCount = this.$refs.box.childElementCount;

      if (this.elementId < this.photoCount) {
        this.photoSrc = this.$refs.box.children[
          this.elementId - 2
        ].firstChild.attributes.src.value;

        this.selectedID = this.$refs.box.children[
          this.elementId - 2
        ].firstChild.id;
      } else {
        this.photoSrc = this.$refs.box.children[
          this.photoCount - 2
        ].firstChild.attributes.src.value;
        this.selectedID = this.$refs.box.children[
          this.photoCount - 2
        ].firstChild.id;
      }

      if (this.selectedID == 1) {
        e.target.attributes.class.value = this.className;
      }

      if (this.selectedID < this.photoCount) {
        this.$refs.nextButton.attributes.class.value = this.nextClass;
      }
    },
  },
});
