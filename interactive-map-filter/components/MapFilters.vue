<template>
    <div>
        <!-- filter UI here -->
        <select v-model="selectedOptions" @change="handleFilterChange">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedOptions: '', // Use lowercase 's' for consistency
        };
    },
    methods: {
        handleFilterChange() {
            // Emit filter change event with selected option
            this.$emit('filterChange', this.selectedOptions); // Use selectedOptions
        }
    }
}
</script>
