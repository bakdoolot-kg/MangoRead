export function a11yProps(index) {
  return {
    id: `tabpanel-${index}`,
    'aria-controls': `tab-${index}`
  }
}