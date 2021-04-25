import Hijo from './../../components/Hijo.vue'

export default {
  name: 'Padre',
  props: {
    msg: String
  },
  components: {
    Hijo
  }
};