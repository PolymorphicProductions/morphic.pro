FROM elixir:1.10.4

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
  apt-get install -y --no-install-recommends dialog apt-utils && \
  apt-get install -y apt-transport-https && \
  apt-get install -y software-properties-common && \
  apt-get install -y git && \
  apt-get install -y curl && \
  apt-get install -y postgresql-client && \
  apt-get install -y inotify-tools && \
  mix local.hex --force && \
  mix archive.install hex phx_new 1.5.5 --force && \
  mix local.rebar --force && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

CMD ["mix", "phx.server"]