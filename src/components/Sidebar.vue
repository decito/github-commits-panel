<script setup>
import * as gData from '../assets/json/trimmed-dataset.json'

const listYearRange = () => {
  const dates = gData.map((d) => d.created_at)

  for (let i = 0; i < dates.length; i += 1) {
    dates[i] = dates[i].slice(0, 4)
  }

  let years = [...new Set(dates)]

  years = dates.reduce((acc, cur) => {
    if (acc.indexOf(cur) < 0) acc.push(cur)
    return acc
  }, [])

  return years
}
</script>

<template>
  <ul>
    <li v-for="year in listYearRange()" :key="year">
      <a href="#">{{ year }}</a>
    </li>
  </ul>
</template>
