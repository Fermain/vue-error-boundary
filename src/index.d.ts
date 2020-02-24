import ErrorBoundary from './ErrorBoundary.vue';
import Vue from 'vue';

declare module 'vue-error-boundary' {
    class ErrorBoundary extends Vue { }
    export default ErrorBoundary
}