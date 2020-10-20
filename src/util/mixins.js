function getTitle (vm) {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

export const titleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = `Vue HN | ${title}`
    }
  }
}
