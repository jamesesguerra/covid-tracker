<template>
    <select @change="onChange" v-model="selected" class="form-select mt-10 mx-auto block w-96 border p-3 rounded text-center cursor-pointer">
        <option value="0">Select Country</option>
        <option :value="country.ID" v-for="country in countries" :key="country.ID">
            {{ country.Country }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        onChange() {
            const country = this.countries.find(item => {
                return item.ID === this.selected;
            })
            this.$emit('get-country', country)
        }
    }
}
</script>

