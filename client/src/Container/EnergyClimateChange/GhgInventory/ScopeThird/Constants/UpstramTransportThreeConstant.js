const UPSTREAM_TRANSPORT_THREE = [
  {
    attributes: {
      description: 'Mode of Transport',
      data_value_validation_id: 'list_single',
      active: 1,
    },
    required: true,
    container: 'col-sm-2',
    references: {
      material_issue: {
        id: 2,
        link: 'http://10.0.1.108/api/v1/meta-material-issues/2',
      },
    },
    id: {
      material_issue_id: 2,
      material_issue_segment_id: 14,
      data_key: 'mode_of_transport',
    },
    link: 'http://10.0.1.108/api/v1/meta-material-issue-data-keys/%7B%22material_issue_id%22%3A2%2C%22material_issue_segment_id%22%3A14%2C%22data_key%22%3A%22mode_of_transport%22%7D',
    dependent_parent: [],
    dependent_data_keys: [
      'fuel',
      'vehicle_category',
    ],
  },
  {
    attributes: {
      description: 'Type',
      data_value_validation_id: 'list_single',
      active: 1,
    },
    required: true,
    container: 'col-sm-2',
    references: {
      material_issue: {
        id: 2,
        link: 'http://10.0.1.108/api/v1/meta-material-issues/2',
      },
    },
    id: {
      material_issue_id: 2,
      material_issue_segment_id: 14,
      data_key: 'vehicle_category',
    },
    link: 'http://10.0.1.108/api/v1/meta-material-issue-data-keys/%7B%22material_issue_id%22%3A2%2C%22material_issue_segment_id%22%3A14%2C%22data_key%22%3A%22vehicle_category%22%7D',
    dependent_parent: [
      'mode_of_transport',
    ],
    dependent_data_keys: [
      'vehicle_type',
    ],
  },
  {
    attributes: {
      description: 'Size',
      data_value_validation_id: 'list_single',
      active: 1,
    },
    required: true,
    container: 'col-sm-2',
    references: {
      material_issue: {
        id: 2,
        link: 'http://10.0.1.108/api/v1/meta-material-issues/2',
      },
    },
    id: {
      material_issue_id: 2,
      material_issue_segment_id: 14,
      data_key: 'vehicle_type',
    },
    link: 'http://10.0.1.108/api/v1/meta-material-issue-data-keys/%7B%22material_issue_id%22%3A2%2C%22material_issue_segment_id%22%3A14%2C%22data_key%22%3A%22vehicle_type%22%7D',
    dependent_parent: [
      'vehicle_category',
    ],
    dependent_data_keys: [],
  },
  {
    attributes: {
      description: 'Fuel Type',
      data_value_validation_id: 'list_single',
      active: 1,
    },
    required: true,
    container: 'col-sm-2',
    references: {
      material_issue: {
        id: 2,
        link: 'http://10.0.1.108/api/v1/meta-material-issues/2',
      },
    },
    id: {
      material_issue_id: 2,
      material_issue_segment_id: 14,
      data_key: 'fuel',
    },
    link: 'http://10.0.1.108/api/v1/meta-material-issue-data-keys/%7B%22material_issue_id%22%3A2%2C%22material_issue_segment_id%22%3A14%2C%22data_key%22%3A%22fuel%22%7D',
    dependent_parent: [
      'mode_of_transport',
    ],
    dependent_data_keys: [],
  },
  {
    attributes: {
      description: 'Consumption',
      data_value_validation_id: 'none',
      active: 1,
    },
    required: true,
    container: 'col-sm-2',
    references: {
      material_issue: {
        id: 2,
        link: 'http://10.0.1.108/api/v1/meta-material-issues/2',
      },
    },
    id: {
      material_issue_id: 2,
      material_issue_segment_id: 14,
      data_key: 'consumption_value',
    },
    link: 'http://10.0.1.108/api/v1/meta-material-issue-data-keys/%7B%22material_issue_id%22%3A2%2C%22material_issue_segment_id%22%3A14%2C%22data_key%22%3A%22consumption_value%22%7D',
    dependent_parent: [],
    dependent_data_keys: [],
  },
  {
    attributes: {
      description: 'Unit',
      data_value_validation_id: 'none',
      active: 1,
    },
    required: true,
    container: 'col-sm-2',
    references: {
      material_issue: {
        id: 2,
        link: 'http://10.0.1.108/api/v1/meta-material-issues/2',
      },
    },
    id: {
      material_issue_id: 2,
      material_issue_segment_id: 14,
      data_key: 'unit_of_measure',
    },
    link: 'http://10.0.1.108/api/v1/meta-material-issue-data-keys/%7B%22material_issue_id%22%3A2%2C%22material_issue_segment_id%22%3A14%2C%22data_key%22%3A%22unit_of_measure%22%7D',
    dependent_parent: [],
    dependent_data_keys: [],
  },
];

export default UPSTREAM_TRANSPORT_THREE;
