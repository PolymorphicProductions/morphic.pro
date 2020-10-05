FROM hexpm/elixir:1.10.4-erlang-23.0.4-ubuntu-bionic-20200630

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends build-essential dialog apt-utils gpg-agent \
  apt-transport-https software-properties-common git curl postgresql-client inotify-tools && \
  curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
  apt-get update && apt-get install -y nodejs && \
  mix local.hex --force && \
  mix archive.install hex phx_new 1.5.5 --force && \
  mix local.rebar --force && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
  
ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

CMD ["mix", "phx.server"]