export enum Metric {
    TTFB = "experimental_time_to_first_byte",
    LCP = 'largest_contentful_paint',
    INP = 'interaction_to_next_paint',
    CLS = 'cumulative_layout_shift',
}

export enum CoreWebVitalRanking {
    GOOD = 'good',
    NEEDS_IMPROVEMENT = 'ni',
    POOR = 'poor',
}

type MetricThresholds = { [key in CoreWebVitalRanking]: (value: number) => Boolean};

const ttfbRankingThresholds: MetricThresholds = {
    [CoreWebVitalRanking.GOOD]: (value: number) => value <= 800,
    [CoreWebVitalRanking.NEEDS_IMPROVEMENT]: (value: number) => value > 800 && value <= 1800,
    [CoreWebVitalRanking.POOR]: (value: number) => value > 1800,
}

const lcpRankingThresholds = {
    [CoreWebVitalRanking.GOOD]: (value: number) => value <= 2500,
    [CoreWebVitalRanking.NEEDS_IMPROVEMENT]: (value: number) => value > 2500 && value <= 4000,
    [CoreWebVitalRanking.POOR]: (value: number) => value > 4000,
}

const inpRankingThresholds = {
    [CoreWebVitalRanking.GOOD]: (value: number) => value <= 200,
    [CoreWebVitalRanking.NEEDS_IMPROVEMENT]: (value: number) => value > 200 && value <= 500,
    [CoreWebVitalRanking.POOR]: (value: number) => value > 500,
}

const clsRankingThresholds = {
    [CoreWebVitalRanking.GOOD]: (value: number) => value <= 0.1,
    [CoreWebVitalRanking.NEEDS_IMPROVEMENT]: (value: number) => value > 0.1 && value <= 0.25,
    [CoreWebVitalRanking.POOR]: (value: number) => value > 0.25,
}

const metricToRankingFunctions: { [key in Metric]: MetricThresholds} = {
    [Metric.TTFB]: ttfbRankingThresholds,
    [Metric.LCP]: lcpRankingThresholds,
    [Metric.INP]: inpRankingThresholds,
    [Metric.CLS]: clsRankingThresholds,
}

export const getCvwRanking = (metric: Metric) => (value: number): CoreWebVitalRanking | undefined => {
    if(metricToRankingFunctions[metric][CoreWebVitalRanking.GOOD](value)){
        return CoreWebVitalRanking.GOOD;
    }
    if(metricToRankingFunctions[metric][CoreWebVitalRanking.NEEDS_IMPROVEMENT](value)){
        return CoreWebVitalRanking.NEEDS_IMPROVEMENT;
    }
    if(metricToRankingFunctions[metric][CoreWebVitalRanking.POOR](value)){
        return CoreWebVitalRanking.POOR;
    }
}