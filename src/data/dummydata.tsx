const chartData = [
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 34,
      },
    ],
    device: "Machine 12",
    donutChartdata: 34,
  },
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 50,
      },
    ],
    device: "Machine 13",
    donutChartdata: 50,
  },
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 3,
      },
    ],
    device: "Machine 14",
    donutChartdata: 3,
  },
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 40,
      },
    ],
    device: "Machine 15",
    donutChartdata: 40,
  },
];

const notificationData = [
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 80,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 50,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 20,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
  {
    recipients: ["some@recipients.com", "some111@recipients.com"],
    machines: ["machine1", "machine3"],
    severity: 80,
    message:
      "We have detected that your system's GPU usage has reached critical levels, consistently operating at or above 90% capacity. This high level of usage may lead to significant performance degradation, overheating, and potential hardware damage if not addressed promptly.",
    date: "Sept 13, 2024",
    id: "66c0f686490dc322ba29b7c5",
  },
];

export { chartData, notificationData };
