  //ENTRIES
  window.data= {}

  window.data.infrastructure = [
    {
      quadrant: 1,
      status: 'adopt',
      label: "Docker",
      active: false,
      link: "../infrastructure/docker.html",
      moved: 0
    },
    {
      quadrant: 1,
      status: 'access',
      label: "Kubernetes",
      active: false,
      link: "../infrastructure/kubernetes.html",
      moved: 0
    },
    {
      quadrant: 1,
      status: 'adopt',
      label: "Nginx",
      active: false,
      link: "../infrastructure/nginx.html",
      moved: 0
    },]
  window.data.language = [
    {
      quadrant: 0,
      status: 'access',
      label: "Go",
      active: true,
      link: "go.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'hold',
      label: "Java",
      active: true,
      link: "java.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'adopt',
      label: "JavaScript",
      active: true,
      link: "javascript.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'access',
      label: "Scala",
      active: true,
      link: "scala.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'access',
      label: "Haskell",
      active: true,
      link: "haskell.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'adopt',
      label: "TypeScript",
      active: true,
      link: "typescript.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'access',
      label: "Elm",
      active: true,
      link: "elm.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'access',
      label: "R",
      active: true,
      link: "r.html",
      moved: 0
    },
    {
      quadrant: 0,
      status: 'access',
      label: "Rust",
      active: true,
      link: "rust.html",
      moved: 0
    },
    {
        quadrant: 0,
        status: 'adopt',
        label: "Reasonml/Ocaml",
        active: true,
        link: "rust.html",
        moved: 0
      },
  ]

window.data.frameworks = [{
    quadrant: 2,
    status: 'adopt',
    label: "Akka (Scala)",
    active: false,
    link: "../frameworks/akka_scala.html",
    moved: 0
  },
  {
    quadrant: 2,
    status: 'adopt',
    label: "Node.js",
    active: false,
    link: "../frameworks/nodejs.html",
    moved: 0
  },
  {
    quadrant: 2,
    status: 'adopt',
    label: "ReactJS",
    active: false,
    link: "../frameworks/reactjs.html",
    moved: 0
  },
  {
    quadrant: 2,
    status: 'hold',
    label: "AngularJS",
    active: false,
    link: "../frameworks/angular.html",
    moved: 0
  },


  {
    quadrant: 2,
    status: 'access',
    label: "Ember.js",
    active: false,
    link: "../frameworks/emberjs.html",
    moved: 0
  },
  {
    quadrant: 2,
    status: 'hold',
    label: "Redux",
    active: false,
    link: "../frameworks/redux.html",
    moved: 0
  },
  {
    quadrant: 2,
    status: 'access',
    label: "Vue.js",
    active: false,
    link: "../frameworks/vuejs.html",
    moved: 0
  },
  {
    quadrant: 2,
    status: 'hold',
    label: "AngularJS 1.x",
    active: false,
    link: "../frameworks/angularjs_1x.html",
    moved: 0
  },]
window.data.dataProcessing = [
    {
        quadrant: 3,
        status: 'adopt',
        label: "AWS EMR",
        active: false,
        link: "../data_processing/aws_emr.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "Spark",
        active: false,
        link: "../data_processing/spark.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "Airflow",
        active: false,
        link: "../data_processing/airflow.html",
        moved: 1
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "AWS Data Pipeline",
        active: false,
        link: "../data_processing/aws_data_pipeline.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "Flink",
        active: false,
        link: "../data_processing/flink.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "Google BigQuery",
        active: false,
        link: "../data_processing/google_bigquery.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "Presto",
        active: false,
        link: "../data_processing/presto.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'access',
        label: "Hadoop",
        active: false,
        link: "../data_processing/hadoop.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'access',
        label: "YARN",
        active: false,
        link: "../data_processing/yarn.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "Esper",
        active: false,
        link: "../data_processing/esper.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "AWS S3",
        active: false,
        link: "../datastores/aws_s3.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "Cassandra",
        active: false,
        link: "../datastores/cassandra.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "Elasticsearch",
        active: false,
        link: "../datastores/elasticsearch.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "etcd",
        active: false,
        link: "../datastores/etcd.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "PostgreSQL",
        active: false,
        link: "../datastores/postgresql.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "Redis",
        active: false,
        link: "../datastores/redis.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'adopt',
        label: "Solr",
        active: false,
        link: "../datastores/solr.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "AWS DynamoDB",
        active: false,
        link: "../datastores/aws_dynamodb.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "HDFS",
        active: false,
        link: "../datastores/hdfs.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'trial',
        label: "KairosDB",
        active: false,
        link: "../datastores/kairos.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'access',
        label: "Consul",
        active: false,
        link: "../datastores/consul.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'access',
        label: "Google Bigtable",
        active: false,
        link: "../datastores/google_bigtable.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'access',
        label: "RocksDB",
        active: false,
        link: "../datastores/rocksdb.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "Aerospike",
        active: false,
        link: "../datastores/aerospike.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "CouchBase",
        active: false,
        link: "../datastores/couchbase.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "HBase",
        active: false,
        link: "../datastores/hbase.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "Memcached",
        active: false,
        link: "../datastores/memcached.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "MongoDB",
        active: false,
        link: "../datastores/mongodb.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "MySQL",
        active: false,
        link: "../datastores/mysql.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "Oracle DB",
        active: false,
        link: "../datastores/oracle_db.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "Riak",
        active: false,
        link: "../datastores/riak.html",
        moved: 0
      },
      {
        quadrant: 3,
        status: 'hold',
        label: "ZooKeeper",
        active: false,
        link: "../datastores/zookeeper.html",
        moved: 0
      },
]

const statusMap = {
    adopt: 0,
    trial: 1,
    access:2,
    hold: 3,
}

function formatEntries(inputData){
    return inputData.map(item => {
        return {
            ...item,
            ring: statusMap[item.status]
        }
    })
}
window.entries= [...formatEntries(window.data.infrastructure), ...formatEntries(window.data.language), ...formatEntries(window.data.frameworks)]
//ENTRIES